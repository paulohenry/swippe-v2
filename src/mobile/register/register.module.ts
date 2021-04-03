import { Module } from '@nestjs/common';
import { AdvertisersModule } from '../advertisers/advertisers.module';
import { InfluencerModule } from '../influencers/influencer.module';
import { RegisterUsersController } from './controllers/register.controller';
import { RegisterService } from './services/register.service';
@Module({
    imports: [InfluencerModule, AdvertisersModule],
    controllers: [RegisterUsersController],
    providers: [RegisterService],
    exports: [RegisterService],
})
export class RegisterUserModule {}
