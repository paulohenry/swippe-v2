import { Controller, Delete, Logger, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserLogged } from '../../../../shared/decorators/user-logger.decorator';
import { JwtAuthGuard } from '../../../../shared/guards/jwt-auth.guard';
import { IUserLogged } from '../../../../shared/interfaces/user-logged.interface';

@ApiTags('commons')
@Controller('delete')
export class DeleteController {
    private logger: Logger;

    constructor() {
        this.logger = new Logger(DeleteController.name);
    }

    @Delete()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    async delete(@UserLogged() user: IUserLogged) {
        return { message: `delete me ${user}` };
    }
}
