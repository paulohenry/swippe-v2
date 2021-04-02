import { Injectable } from '@nestjs/common';
import { CreateAdvertiserDto } from '../dtos/create-advertisers.dto';
import { AdvertiserRepository } from '../repositories/advertiser.repository';
@Injectable()
export class CreatAdvertiserService {
    constructor(private readonly advertiserRepository: AdvertiserRepository) {}

    async createOneAdvertiser(dto: CreateAdvertiserDto) {
        return await this.advertiserRepository.create(dto);
    }
}
