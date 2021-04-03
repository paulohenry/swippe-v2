import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
    BaseAbstractRepository,
    BaseModel,
} from '../../../shared/repository/base.abstract.repository';
import { CreateInfluencerDto } from '../dtos/create-influencer.dto';
import { Influencer, InfluencerDocument } from '../schemas/influencer.schema';
@Injectable()
export class InfluencerRepository extends BaseAbstractRepository<InfluencerDocument> {
    constructor(
        @InjectModel(Influencer.name)
        private readonly influencerModel: BaseModel<InfluencerDocument>,
    ) {
        super(influencerModel);
    }

    async createOneInfluencer(dto: CreateInfluencerDto) {
        const createOne = await this.influencerModel.create(dto);
        return this.influencerModel
            .findOne({ _id: createOne._id })
            .select('-password');
    }
    async findOneInfluencerByEmail(email: string) {
        return await this.influencerModel
            .findOne()
            .where('email', email)
            .exec();
    }
    async findOneInfluencerById(id: string) {
        return await this.influencerModel
            .findOne({ _id: id })
            .select('-password')
            .populate('subjects', [
                'description',
                'subject',
                'subject_value1',
                'subject2',
                'subject_value2',
                'subject3',
                'subject_value3',
                'subject4',
                'subject_value4',
                'subject5',
                'subject_value5',
            ])
            .exec();
    }
    async findAndUpdateSubject(idUser: any, idSubject: any) {
        await this.influencerModel.findByIdAndUpdate(idUser, {
            $set: { subjects: idSubject },
        });
    }
}
