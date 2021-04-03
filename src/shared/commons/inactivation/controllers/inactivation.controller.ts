import { Controller, Logger, Patch, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserLogged } from '../../../../shared/decorators/user-logger.decorator';
import { JwtAuthGuard } from '../../../../shared/guards/jwt-auth.guard';
import { IUserLogged } from '../../../../shared/interfaces/user-logged.interface';

@ApiTags('commons')
@Controller('inactivation')
export class InactivationController {
    private logger: Logger;

    constructor() {
        this.logger = new Logger(InactivationController.name);
    }

    @Patch()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    async delete(@UserLogged() user: IUserLogged) {
        return { message: `inactive me ${user}` };
    }
}
