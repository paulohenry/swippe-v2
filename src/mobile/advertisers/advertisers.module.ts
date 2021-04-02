import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdvertiserController } from './controllers/advertisers.controller';
import { Advertiser, AdvertiserSchema } from './schemas/advertiser.schema';
import { CreatAdvertiserService } from './services/create-advertisers.service';
@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Advertiser.name, schema: AdvertiserSchema },
        ]),
    ],
    controllers: [AdvertiserController],
    providers: [CreatAdvertiserService],
    exports: [CreatAdvertiserService],
})
export class AdvertisersModule {}
