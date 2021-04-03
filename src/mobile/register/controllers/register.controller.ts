import { Body, Controller, Logger, Post, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateAdvertiserDto } from '../../advertisers/dtos/create-advertisers.dto';
import { CreateInfluencerDto } from '../../influencers/dtos/create-influencer.dto';
import { RegisterService } from '../services/register.service';
@Controller('register')
@ApiTags('register')
export class RegisterUsersController {
    private logger: Logger;
    constructor(private readonly registerService: RegisterService) {
        this.logger = new Logger();
    }

    @Post('influencers')
    async registerInfluencers(
        @Body(new ValidationPipe()) dto: CreateInfluencerDto,
    ) {
        const createOne = await this.registerService.registerOneInfluencer(dto);
        delete createOne.password;
        delete createOne.__v;
        return createOne;
    }

    @Post('advertisers')
    async registerAdvertisers(
        @Body(new ValidationPipe()) dto: CreateAdvertiserDto,
    ) {
        const createOne = await this.registerService.registerOneAdvertiser(dto);
        delete createOne.password;
        delete createOne.__v;
        return createOne;
    }
}
