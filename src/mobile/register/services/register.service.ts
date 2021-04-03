import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAdvertiserDto } from '../../advertisers/dtos/create-advertisers.dto';
import { AdvertiserRepository } from '../../advertisers/repositories/advertiser.repository';
import { AdvertiserService } from '../../advertisers/services/advertisers.service';
import { CreateInfluencerDto } from '../../influencers/dtos/create-influencer.dto';
import { InfluencerRepository } from '../../influencers/repositories/influencer.repository';
import { InfluencerService } from '../../influencers/services/influencer.service';
@Injectable()
export class RegisterService {
    constructor(
        private readonly advertiserRepository: AdvertiserRepository,
        private readonly influencerRepository: InfluencerRepository,
        private readonly advertiserService: AdvertiserService,
        private readonly influencerService: InfluencerService,
    ) {}

    async registerOneInfluencer(dto: CreateInfluencerDto) {
        const findOneAdvertiser = await this.advertiserRepository.findOne({
            $or: [
                { email: dto.email },
                { phone: dto.phone },
                { instagram: dto.instagram },
            ],
        });

        const findOneInfluencer = await this.influencerRepository.findOne({
            $or: [
                { email: dto.email },
                { phone: dto.phone },
                { instagram: dto.instagram },
            ],
        });

        if (findOneAdvertiser || findOneInfluencer) {
            throw new BadRequestException('Usuario já cadastrado');
        }

        return await this.influencerService.createOneInfluencer(dto);
    }

    async registerOneAdvertiser(dto: CreateAdvertiserDto) {
        const findOneAdvertiser = await this.advertiserRepository.findOne({
            $or: [
                { email: dto.email },
                { phone: dto.phone },
                { instagram: dto.instagram },
            ],
        });

        const findOneInfluencer = await this.influencerRepository.findOne({
            $or: [
                { email: dto.email },
                { phone: dto.phone },
                { instagram: dto.instagram },
            ],
        });

        if (findOneAdvertiser || findOneInfluencer) {
            throw new BadRequestException('Usuario já cadastrado');
        }

        return await this.advertiserService.createOneAdvertiser(dto);
    }
}
