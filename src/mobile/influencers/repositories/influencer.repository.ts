import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
    BaseAbstractRepository,
    BaseModel,
} from '../../../shared/repository/base.abstract.repository';
import { Influencer, InfluencerDocument } from '../schemas/influencer.schema';

@Injectable()
export class InfluencerRepository extends BaseAbstractRepository<InfluencerDocument> {
    constructor(
        @InjectModel(Influencer.name)
        private readonly influencerModel: BaseModel<InfluencerDocument>,
    ) {
        super(influencerModel);
    }

    async createOneInfluencer(dto: any) {
        return await this.create(dto);
    }
}
