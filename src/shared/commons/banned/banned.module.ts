import { Module } from '@nestjs/common';
import { DeleteController } from './controllers/banned.controller';
@Module({
    controllers: [DeleteController],
    providers: [],
    exports: [],
    imports: [],
})
export class BannedModule {}
