import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { LoggerModule } from 'nestjs-pino';
import { AdvertisersModule } from './mobile/advertisers/advertisers.module';
import { AuthModule } from './mobile/auth/auth.module';
import { InfluencerModule } from './mobile/influencers/influencer.module';
import { RegisterUserModule } from './mobile/register/register.module';
import { BannedModule } from './shared/commons/banned/banned.module';
import { ChatModule } from './shared/commons/chat/chat.module';
import { DeleteModule } from './shared/commons/delete/delete.module';
import { ForgotPasswordModule } from './shared/commons/forgot-password/forgot-password.module';
import { InactivationModule } from './shared/commons/inactivation/inactivation.module';
import { MediasModule } from './shared/commons/medias/medias.module';
import { NotifcationsModule } from './shared/commons/notifications/notifications.module';
import { MongoDBProvider } from './shared/database/mongo.module';
@Module({
    imports: [
        ScheduleModule.forRoot(),
        InfluencerModule,
        MongoDBProvider,
        AdvertisersModule,
        RegisterUserModule,
        AuthModule,
        BannedModule,
        DeleteModule,
        ForgotPasswordModule,
        InactivationModule,
        MediasModule,
        ChatModule,
        NotifcationsModule,
        LoggerModule.forRoot({
            pinoHttp: {
                prettyPrint: process.env.NODE_ENV !== 'production',
            },
        }),
    ],
})
export class AppModule {}
