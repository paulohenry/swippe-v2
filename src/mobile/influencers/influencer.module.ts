import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InfluencerController } from './controllers/influencer.controller';
import { InfluencerRepository } from './repositories/influencer.repository';
import { Influencer, InfluencerSchema } from './schemas/influencer.schema';
import { CreatInfluencerService } from './services/create-influencer.service';
import { DeleteInfluencerService } from './services/delete-influencer.service';
import { EditInfluencerService } from './services/edit-influencer.service';
import { GetInfluencerService } from './services/get-influencer.service';
@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Influencer.name, schema: InfluencerSchema },
        ]),
    ],
    controllers: [InfluencerController],
    providers: [
        CreatInfluencerService,
        EditInfluencerService,
        DeleteInfluencerService,
        GetInfluencerService,
        InfluencerRepository,
    ],
    exports: [CreatInfluencerService],
})
export class InfluencerModule {}
