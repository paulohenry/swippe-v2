import { Module } from '@nestjs/common';
import { AdvertisersModule } from '../advertisers/advertisers.module';
import { InfluencerModule } from '../influencers/influencer.module';
import { RegisterUsersController } from './controllers/register.controller';
@Module({
    imports: [InfluencerModule, AdvertisersModule],
    controllers: [RegisterUsersController],
})
export class RegisterUserModule {}
