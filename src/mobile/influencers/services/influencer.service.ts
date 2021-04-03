import { Injectable } from '@nestjs/common';
import { IUserLogged } from '../../../shared/interfaces/user-logged.interface';
import { hashPassword } from '../../../shared/utils/passwordHook.util';
import { CreateInfluencerDto } from '../dtos/create-influencer.dto';
import { InfluencerSubjectsDto } from '../dtos/upsert-subjects.dto';
import { InfluencerSubjectsRepository } from '../repositories/influencer-subjects.repository';
import { InfluencerRepository } from '../repositories/influencer.repository';

@Injectable()
export class InfluencerService {
    constructor(
        private readonly influencerRepository: InfluencerRepository,
        private readonly influencerSubjectsRepository: InfluencerSubjectsRepository,
    ) {}

    async createOneInfluencer(dto: CreateInfluencerDto) {
        const hashedPassword = hashPassword(dto.password);
        const newDto = { ...dto, password: hashedPassword };
        return await this.influencerRepository.createOneInfluencer(newDto);
    }
    async getOneInfluencer(id: string) {
        return await this.influencerRepository.findOneInfluencerById(id);
    }
    async upsertSubjects(dto: InfluencerSubjectsDto, user: IUserLogged) {
        const mergedDto = { ...dto, idInfluencer: user.id };
        const subjects = await this.influencerSubjectsRepository.usertProfileInfluencer(
            mergedDto,
            dto._id,
        );
        await this.influencerRepository.findAndUpdateSubject(
            user.id,
            subjects._id,
        );

        return subjects;
    }
}
