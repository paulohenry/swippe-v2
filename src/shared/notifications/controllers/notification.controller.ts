import {
    Body,
    Controller,
    InternalServerErrorException,
    Logger,
    Post,
} from '@nestjs/common';
import { Expo } from 'expo-server-sdk';
import { NotificationMessageDto } from '../dtos/notification.dto';
@Controller('send-notification')
export class SendNotificationController {
    private logger: Logger;
    private static expoSdk: Expo;
    constructor(private readonly expoSdk: Expo) {
        this.logger = new Logger(SendNotificationController.name);
        this.expoSdk = new Expo();
    }

    @Post()
    async async(@Body() notifications: NotificationMessageDto[]) {
        const messages = [];
        notifications.forEach((msgs) => {
            console.log(msgs);
            return messages.push({
                title: msgs.title,
                to: msgs.expoPushToken,
                sound: 'default',
                body: msgs.message,
            });
        });
        const chuncks = this.expoSdk.chunkPushNotifications(messages);
        for (const chunk of chuncks) {
            try {
                await this.expoSdk.sendPushNotificationsAsync(chunk);
            } catch (error) {
                throw new InternalServerErrorException(
                    'Falha no envio de notificações',
                );
            }
        }
        return { message: 'Notificação enviada com sucesso' };
    }
}
