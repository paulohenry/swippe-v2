import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { AppModule } from './app.module';
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

const setupSwaggerMobile = (app: INestApplication) => {
    const config = new DocumentBuilder()
        .setTitle('Users Mobile Api Endpoints')
        .setDescription('The Swippe API description')
        .addServer(
            process.env.NODE_ENV === 'development'
                ? `http://localhost:${process.env.SERVER_PORT}`
                : process.env.APP_URL,
        )
        .addBearerAuth()
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config, {
        ignoreGlobalPrefix: false,
        include: [
            AdvertisersModule,
            InfluencerModule,
            RegisterUserModule,
            AuthModule,
            NotifcationsModule,
            MediasModule,
            InactivationModule,
            ForgotPasswordModule,
            DeleteModule,
            ChatModule,
        ],
    });
    SwaggerModule.setup(`docs/mobile`, app, document);
};
const setupSwaggerPortal = (app: INestApplication) => {
    const config = new DocumentBuilder()
        .setTitle('Portal Users Api Endpoints')
        .setDescription('The Swippe API description')
        .addServer(
            process.env.NODE_ENV === 'development'
                ? `http://localhost:${process.env.SERVER_PORT}`
                : process.env.APP_URL,
        )
        .addBearerAuth()
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config, {
        ignoreGlobalPrefix: false,
        include: [BannedModule, NotifcationsModule, MediasModule, ChatModule],
    });
    SwaggerModule.setup(`docs/portal`, app, document);
};

async function bootstrap() {
    mongoose.plugin(() => mongoosePaginate);
    const app = await NestFactory.create(AppModule);

    const globalPrefix = 'api/v2';
    app.setGlobalPrefix(globalPrefix);

    const port = process.env.SERVER_PORT || 3000;
    process.env.NODE_ENV !== 'production' && setupSwaggerMobile(app);
    process.env.NODE_ENV !== 'production' && setupSwaggerPortal(app);
    await app.listen(port, () => {
        Logger.log(
            'Listening at http://localhost:' + port + '/' + globalPrefix,
        );
    });
}
bootstrap();
