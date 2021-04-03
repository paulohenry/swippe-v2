import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdvertiserForInfluencerController } from './controllers/advertisers-for-influencers.controller';
import { AdvertiserController } from './controllers/advertisers.controller';
import { AdvertiserRepository } from './repositories/advertiser.repository';
import { Advertiser, AdvertiserSchema } from './schemas/advertiser.schema';
import { AdvertiserService } from './services/advertisers.service';
@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Advertiser.name, schema: AdvertiserSchema },
        ]),
    ],
    controllers: [AdvertiserController, AdvertiserForInfluencerController],
    providers: [AdvertiserService, AdvertiserRepository],
    exports: [AdvertiserService, AdvertiserRepository],
})
export class AdvertisersModule {}
