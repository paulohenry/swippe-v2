import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
    BaseAbstractRepository,
    BaseModel,
} from '../../../shared/repository/base.abstract.repository';
import { Advertiser, AdvertiserDocument } from '../schemas/advertiser.schema';

@Injectable()
export class AdvertiserRepository extends BaseAbstractRepository<AdvertiserDocument> {
    constructor(
        @InjectModel(Advertiser.name)
        private readonly advertiserModel: BaseModel<AdvertiserDocument>,
    ) {
        super(advertiserModel);
    }
}
