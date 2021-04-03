import { Controller, Logger, Patch, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserLogged } from '../../../../shared/decorators/user-logger.decorator';
import { JwtAuthGuard } from '../../../../shared/guards/jwt-auth.guard';
import { IUserLogged } from '../../../../shared/interfaces/user-logged.interface';

@ApiTags('commons')
@Controller('banned')
export class DeleteController {
    private logger: Logger;

    constructor() {
        this.logger = new Logger(DeleteController.name);
    }

    @Patch()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    async banned(@UserLogged() user: IUserLogged) {
        return { message: `banned me ${user}` };
    }
}
