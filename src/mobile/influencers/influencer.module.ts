import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InfluencerForAdvertiserController } from './controllers/influencer-for-advertiser.controller';
import { InfluencerController } from './controllers/influencer.controller';
import { InfluencerSubjectsRepository } from './repositories/influencer-subjects.repository';
import { InfluencerRepository } from './repositories/influencer.repository';
import {
    InfluencerSubjects,
    InfluencerSubjectsSchema,
} from './schemas/influencer-subjects.schema';
import { Influencer, InfluencerSchema } from './schemas/influencer.schema';
import { InfluencerService } from './services/influencer.service';
@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Influencer.name, schema: InfluencerSchema },
            { name: InfluencerSubjects.name, schema: InfluencerSubjectsSchema },
        ]),
    ],
    controllers: [InfluencerController, InfluencerForAdvertiserController],
    providers: [
        InfluencerService,
        InfluencerRepository,
        InfluencerSubjectsRepository,
    ],
    exports: [
        InfluencerService,
        InfluencerRepository,
        InfluencerSubjectsRepository,
    ],
})
export class InfluencerModule {}
