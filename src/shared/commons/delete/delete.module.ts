import { Module } from '@nestjs/common';
import { DeleteController } from './controllers/delete.controller';
@Module({
    controllers: [DeleteController],
    providers: [],
    exports: [],
    imports: [],
})
export class DeleteModule {}
