import {
    Body,
    Controller,
    Delete,
    Get,
    Logger,
    Param,
    Patch,
    Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatInfluencerService } from '../services/create-influencer.service';
import { DeleteInfluencerService } from '../services/delete-influencer.service';
import { EditInfluencerService } from '../services/edit-influencer.service';
import { GetInfluencerService } from '../services/get-influencer.service';

@ApiTags('Influencers')
@Controller('influencers')
export class InfluencerController {
    private logger: Logger;

    constructor(
        private readonly getInfluencerService: GetInfluencerService,
        private readonly createInfluencerService: CreatInfluencerService,
        private readonly deleteInfluencerService: DeleteInfluencerService,
        private readonly editInfluencerService: EditInfluencerService,
    ) {
        this.logger = new Logger(InfluencerController.name);
    }

    @Get()
    async index() {
        return 'list all Influencers';
    }

    @Get(':id')
    async get(@Param('id') id: string) {
        return `get one influencer by Id ${id}`;
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() dto: any) {
        return { message: `update one influencer by Id ${id}`, body: dto };
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return { message: `delete one influencer by Id ${id}` };
    }

    @Patch('avatar')
    async uploadProfileImage(@Body() dto: any) {
        return '';
    }

    @Patch('gallery')
    async uploadGalleryImage(@Body() dto: any) {
        return '';
    }
}
