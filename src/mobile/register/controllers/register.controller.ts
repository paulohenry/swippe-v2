import { Body, Controller, Logger, Post, ValidationPipe } from '@nestjs/common';
import { CreateAdvertiserDto } from '../../advertisers/dtos/create-advertisers.dto';
import { CreateInfluencerDto } from '../../influencers/dtos/create-influencer.dto';
import { RegisterService } from '../services/register.service';
@Controller('register')
export class RegisterUsersController {
    private logger: Logger;
    constructor(private readonly registerService: RegisterService) {
        this.logger = new Logger();
    }

    @Post('influencers')
    async registerInfluencers(
        @Body(new ValidationPipe()) dto: CreateInfluencerDto,
    ) {
        return await this.registerService.registerOneUser(dto);
    }

    @Post('advertisers')
    async registerAdvertisers(
        @Body(new ValidationPipe()) dto: CreateAdvertiserDto,
    ) {
        return await this.registerService.registerOneUser(dto);
    }
}
