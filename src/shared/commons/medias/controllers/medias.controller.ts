import { Controller, Logger, Patch, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserLogged } from '../../../../shared/decorators/user-logger.decorator';
import { JwtAuthGuard } from '../../../../shared/guards/jwt-auth.guard';
import { IUserLogged } from '../../../../shared/interfaces/user-logged.interface';

@ApiTags('commons')
@Controller('medias')
export class MediasController {
    private logger: Logger;

    constructor() {
        this.logger = new Logger(MediasController.name);
    }

    @Patch()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    async delete(@UserLogged() user: IUserLogged) {
        return { message: `put my media ${user}` };
    }
}
