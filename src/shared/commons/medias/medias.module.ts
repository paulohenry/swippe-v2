import { Module } from '@nestjs/common';
import { MediasController } from './controllers/medias.controller';
@Module({
    controllers: [MediasController],
    providers: [],
    exports: [],
    imports: [],
})
export class MediasModule {}
