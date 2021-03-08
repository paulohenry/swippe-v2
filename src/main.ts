import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as mongoose from 'mongoose';
import * as mongoose_delete from 'mongoose-delete';
import { AppModule } from './app.module';

const setupSwagger = (app: INestApplication) => {
    const config = new DocumentBuilder()
        .setTitle('Users Api Endpoints')
        .setDescription('The Swippe API description')
        .setVersion('1.0')
        .addTag('Swippe Documentation')
        .build();

    const document = SwaggerModule.createDocument(app, config, {
        ignoreGlobalPrefix: false,
    });
    SwaggerModule.setup(`docs`, app, document);
};

async function bootstrap() {
    mongoose.plugin(mongoose_delete, {
        deletedAt: true,
        overrideMethods: 'all',
    });

    const app = await NestFactory.create(AppModule);

    const globalPrefix = 'api/v2';
    app.setGlobalPrefix(globalPrefix);

    const port = process.env.SERVER_PORT || 3000;
    setupSwagger(app);
    await app.listen(port, () => {
        Logger.log(
            'Listening at http://localhost:' + port + '/' + globalPrefix,
        );
    });
}
bootstrap();
