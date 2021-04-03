import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
    BaseAbstractRepository,
    BaseModel,
} from '../../../shared/repository/base.abstract.repository';
import { CreateAdvertiserDto } from '../dtos/create-advertisers.dto';
import { Advertiser, AdvertiserDocument } from '../schemas/advertiser.schema';
@Injectable()
export class AdvertiserRepository extends BaseAbstractRepository<AdvertiserDocument> {
    constructor(
        @InjectModel(Advertiser.name)
        private readonly advertiserModel: BaseModel<AdvertiserDocument>,
    ) {
        super(advertiserModel);
    }
    async createOneAdvertiser(dto: CreateAdvertiserDto) {
        const createdOne = await this.advertiserModel.create(dto);
        return await this.advertiserModel
            .findOne({ _id: createdOne._id })
            .select('-password')
            .exec();
    }
    async findOneAdvertiserByEmail(email: string) {
        return await this.advertiserModel
            .findOne()
            .where('email', email)
            .exec();
    }
    async findOneAdvertiserById(id: string) {
        return await this.advertiserModel
            .findOne({ _id: id })
            .select('-password')
            .exec();
    }
}
