import { Controller, Logger, Patch, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserLogged } from '../../../decorators/user-logger.decorator';
import { JwtAuthGuard } from '../../../guards/jwt-auth.guard';
import { IUserLogged } from '../../../interfaces/user-logged.interface';

@ApiTags('commons')
@Controller('notifications')
export class NotificationsController {
    private logger: Logger;

    constructor() {
        this.logger = new Logger(NotificationsController.name);
    }

    @Patch()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    async delete(@UserLogged() user: IUserLogged) {
        return { message: `send me notify ${user}` };
    }
}
