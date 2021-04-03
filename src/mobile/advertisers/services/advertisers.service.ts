import { Injectable } from '@nestjs/common';
import { hashPassword } from '../../../shared/utils/passwordHook.util';
import { CreateAdvertiserDto } from '../dtos/create-advertisers.dto';
import { AdvertiserRepository } from '../repositories/advertiser.repository';
@Injectable()
export class AdvertiserService {
    constructor(private readonly advertiserRepository: AdvertiserRepository) {}

    async createOneAdvertiser(dto: CreateAdvertiserDto) {
        const hashedPassword = hashPassword(dto.password);
        const newDto = { ...dto, password: hashedPassword };
        return await this.advertiserRepository.createOneAdvertiser(newDto);
    }
    async getOneAdvertiser(id: string) {
        return await this.advertiserRepository.findOneById(id);
    }
}
