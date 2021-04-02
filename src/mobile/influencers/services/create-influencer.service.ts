import { Injectable } from '@nestjs/common';
import { CreateInfluencerDto } from '../dtos/create-influencer.dto';
import { InfluencerRepository } from '../repositories/influencer.repository';
@Injectable()
export class CreatInfluencerService {
    constructor(private readonly influencerRepository: InfluencerRepository) {}

    async createOneInfluencer(dto: CreateInfluencerDto) {
        return await this.influencerRepository.createOneInfluencer(dto);
    }
}
