import { Controller, Get, Logger, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { InfluencerRole } from '../../../shared/guards/influencer-role.guard';
import { JwtAuthGuard } from '../../../shared/guards/jwt-auth.guard';
import { AdvertiserService } from '../services/advertisers.service';

@ApiTags('advertisers-for-influencers')
@Controller('advertisers/for')
export class AdvertiserForInfluencerController {
    private logger: Logger;

    constructor(private readonly advertiserService: AdvertiserService) {
        this.logger = new Logger(AdvertiserForInfluencerController.name);
    }

    @Get('list')
    @UseGuards(JwtAuthGuard)
    @UseGuards(InfluencerRole)
    @ApiBearerAuth()
    async listAll() {
        return 'list all works';
    }

    @Get('/profile/:id')
    @UseGuards(JwtAuthGuard)
    @UseGuards(InfluencerRole)
    @ApiBearerAuth()
    async getProfile(@Param('id') id: string) {
        return 'get one advertiser';
    }
}
