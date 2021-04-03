import {
    Body,
    Controller,
    Get,
    Logger,
    Patch,
    UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserLogged } from '../../../shared/decorators/user-logger.decorator';
import { AdvertiserRole } from '../../../shared/guards/advertiser-role.guard';
import { JwtAuthGuard } from '../../../shared/guards/jwt-auth.guard';
import { IUserLogged } from '../../../shared/interfaces/user-logged.interface';
import { AdvertiserService } from '../services/advertisers.service';

@ApiTags('advertisers')
@Controller('advertisers/me')
export class AdvertiserController {
    private logger: Logger;

    constructor(private readonly advertiserService: AdvertiserService) {
        this.logger = new Logger(AdvertiserController.name);
    }

    @Get('profile')
    @UseGuards(JwtAuthGuard)
    @UseGuards(AdvertiserRole)
    @ApiBearerAuth()
    async getProfileMe(@UserLogged() user: IUserLogged) {
        return await this.advertiserService.getOneAdvertiser(user.id);
    }

    @Patch('profile')
    @UseGuards(JwtAuthGuard)
    @UseGuards(AdvertiserRole)
    @ApiBearerAuth()
    async updateProfile(@UserLogged() user: IUserLogged, @Body() dto: any) {
        return { message: `update me  ${user}`, body: dto };
    }
}
