import {
    Body,
    Controller,
    Get,
    Logger,
    Patch,
    UseGuards,
    ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserLogged } from '../../../shared/decorators/user-logger.decorator';
import { InfluencerRole } from '../../../shared/guards/influencer-role.guard';
import { JwtAuthGuard } from '../../../shared/guards/jwt-auth.guard';
import { IUserLogged } from '../../../shared/interfaces/user-logged.interface';
import { InfluencerSubjectsDto } from '../dtos/upsert-subjects.dto';
import { InfluencerService } from '../services/influencer.service';

@ApiTags('influencers')
@Controller('influencers/me')
export class InfluencerController {
    private logger: Logger;

    constructor(private readonly influencerService: InfluencerService) {
        this.logger = new Logger(InfluencerController.name);
    }

    @Get('profile')
    @UseGuards(JwtAuthGuard)
    @UseGuards(InfluencerRole)
    @ApiBearerAuth()
    async getProfileMe(@UserLogged() user: IUserLogged) {
        return await this.influencerService.getOneInfluencer(user.id);
    }

    @Patch('subjects')
    @UseGuards(JwtAuthGuard)
    @UseGuards(InfluencerRole)
    @ApiBearerAuth()
    async upsertSubjects(
        @UserLogged() user: IUserLogged,
        @Body(new ValidationPipe()) dto: InfluencerSubjectsDto,
    ) {
        return await this.influencerService.upsertSubjects(dto, user);
    }
}
