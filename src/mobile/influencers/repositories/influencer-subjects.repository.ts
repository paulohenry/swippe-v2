import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ObjectId } from 'bson';
import {
    BaseAbstractRepository,
    BaseModel,
} from '../../../shared/repository/base.abstract.repository';
import {
    InfluencerSubjects,
    InfluencerSubjectsDocument,
} from '../schemas/influencer-subjects.schema';
@Injectable()
export class InfluencerSubjectsRepository extends BaseAbstractRepository<InfluencerSubjectsDocument> {
    constructor(
        @InjectModel(InfluencerSubjects.name)
        private readonly influencerSubjectsModel: BaseModel<InfluencerSubjectsDocument>,
    ) {
        super(influencerSubjectsModel);
    }

    async usertProfileInfluencer(dto: any, id?: string) {
        try {
            const res = await this.influencerSubjectsModel
                .findOneAndUpdate({ _id: id ? id : new ObjectId() }, dto, {
                    new: true,
                    upsert: true,
                })
                .select([
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
            return res;
        } catch (err) {
            throw new BadRequestException('Este usuário já tem perfil criado');
        }
    }
}
