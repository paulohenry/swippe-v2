import { Injectable } from '@nestjs/common';
import { InfluencerRepository } from '../repositories/influencer.repository';
import { Influencer } from '../schemas/influencer.schema';

@Injectable()
export class CreatInfluencerService {
    constructor(private readonly influencerRepository: InfluencerRepository) {}

    async createOneInfluencer(dto: Influencer) {
        return await this.influencerRepository.create(dto);
    }
}
