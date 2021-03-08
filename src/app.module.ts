import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { LoggerModule } from 'nestjs-pino';
import { MongoDBProvider } from './database/mongo.module';
import { InfluencerModule } from './mobile/influencers/influencer.module';
import { NotificationModule } from './shared/notifications/notification.module';
@Module({
    imports: [
        ScheduleModule.forRoot(),
        InfluencerModule,
        MongoDBProvider,
        NotificationModule,
        LoggerModule.forRoot({
            pinoHttp: {
                prettyPrint: process.env.NODE_ENV !== 'production',
            },
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
