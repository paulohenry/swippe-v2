import { Module } from '@nestjs/common';
import { InactivationController } from './controllers/inactivation.controller';
@Module({
    controllers: [InactivationController],
    providers: [],
    exports: [],
    imports: [],
})
export class InactivationModule {}
