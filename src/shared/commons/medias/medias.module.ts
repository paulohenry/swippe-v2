import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MediasController } from './controllers/medias.controller';
import { MediasRepository } from './repositories/medias.repository';
import { Medias, MediasSchema } from './schemas/medias.schema';
import { FilesService } from './services/medias.service';
@Module({
    controllers: [MediasController],
    providers: [FilesService, MediasRepository],
    exports: [FilesService, MediasRepository],
    imports: [
        MongooseModule.forFeature([
            { name: Medias.name, schema: MediasSchema },
        ]),
    ],
})
export class MediasModule {}
