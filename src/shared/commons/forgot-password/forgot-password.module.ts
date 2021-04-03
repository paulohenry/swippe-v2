import { Module } from '@nestjs/common';
import { ForgotPasswordController } from './controllers/forgot-password.controller';

@Module({
    controllers: [ForgotPasswordController],
    providers: [],
    exports: [],
    imports: [],
})
export class ForgotPasswordModule {}
