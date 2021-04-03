import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
    BaseAbstractRepository,
    BaseModel,
} from '../../../../shared/repository/base.abstract.repository';
import { Medias, MediasDocument } from '../schemas/medias.schema';
@Injectable()
export class MediasRepository extends BaseAbstractRepository<MediasDocument> {
    constructor(
        @InjectModel(Medias.name)
        private readonly mediaModel: BaseModel<MediasDocument>,
    ) {
        super(mediaModel);
    }

    async createOneMedia(dto: any) {
        return await this.mediaModel.create(dto);
    }
    async deleteOneMediaByid(id: string) {
        await this.mediaModel.deleteOne({ _id: id });
        return true;
    }
}
