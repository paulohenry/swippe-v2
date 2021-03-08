import { IsString } from 'class-validator';

export class NotificationMessageDto {
    @IsString()
    title: string;

    @IsString()
    message: string;

    @IsString()
    expoPushToken: string;
}
