import { Module } from '@nestjs/common';
import { Expo } from 'expo-server-sdk';
import { SendNotificationController } from './controllers/notification.controller';

@Module({
    imports: [],
    controllers: [SendNotificationController],
    providers: [Expo],
    exports: [Expo],
})
export class NotificationModule {}
