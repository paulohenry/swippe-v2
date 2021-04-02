import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { LoggerModule } from 'nestjs-pino';
import { InfluencerModule } from './mobile/influencers/influencer.module';
import { RegisterUserModule } from './mobile/register/register.module';
import { MongoDBProvider } from './shared/database/mongo.module';
@Module({
    imports: [
        ScheduleModule.forRoot(),
        InfluencerModule,
        MongoDBProvider,
        RegisterUserModule,
        LoggerModule.forRoot({
            pinoHttp: {
                prettyPrint: process.env.NODE_ENV !== 'production',
            },
        }),
    ],
})
export class AppModule {}
