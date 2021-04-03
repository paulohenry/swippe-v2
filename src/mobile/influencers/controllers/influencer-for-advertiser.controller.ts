import { Controller, Get, Logger, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdvertiserRole } from '../../../shared/guards/advertiser-role.guard';
import { JwtAuthGuard } from '../../../shared/guards/jwt-auth.guard';
import { InfluencerService } from '../services/influencer.service';

@ApiTags('influencers-for-advertisers')
@Controller('influencers/for')
export class InfluencerForAdvertiserController {
    private logger: Logger;

    constructor(private readonly influencerService: InfluencerService) {
        this.logger = new Logger(InfluencerForAdvertiserController.name);
    }

    @Get('list/influencers')
    @UseGuards(JwtAuthGuard)
    @UseGuards(AdvertiserRole)
    @ApiBearerAuth()
    async listAll() {
        return 'list all Influencers';
    }

    @Get('/profile/:id')
    @UseGuards(JwtAuthGuard)
    @UseGuards(AdvertiserRole)
    @ApiBearerAuth()
    async getProfile(@Param('id') id: string) {
        return await this.influencerService.getOneInfluencer(id);
    }

    @Get('/instagram-statistics/:id')
    @UseGuards(JwtAuthGuard)
    @UseGuards(AdvertiserRole)
    @ApiBearerAuth()
    async getStatistics(@Param('id') id: string) {
        return `view one influencer by id ${id}`;
    }
}
