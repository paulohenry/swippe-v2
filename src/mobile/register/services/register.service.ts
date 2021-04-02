import { Injectable } from '@nestjs/common';
import { CreateAdvertiserDto } from '../../advertisers/dtos/create-advertisers.dto';
import { AdvertiserRepository } from '../../advertisers/repositories/advertiser.repository';
import { CreateInfluencerDto } from '../../influencers/dtos/create-influencer.dto';
import { InfluencerRepository } from '../../influencers/repositories/influencer.repository';
@Injectable()
export class RegisterService {
    constructor(
        private readonly advertiserRepository: AdvertiserRepository,
        private readonly influencerRepository: InfluencerRepository,
    ) {}

    async registerOneUser(dto: CreateAdvertiserDto | CreateInfluencerDto) {
        return '';
    }
}
