import { Controller, Logger, Patch, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserLogged } from '../../../decorators/user-logger.decorator';
import { JwtAuthGuard } from '../../../guards/jwt-auth.guard';
import { IUserLogged } from '../../../interfaces/user-logged.interface';

@ApiTags('commons')
@Controller('chat')
export class ChatController {
    private logger: Logger;

    constructor() {
        this.logger = new Logger(ChatController.name);
    }

    @Patch('send')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    async delete(@UserLogged() user: IUserLogged) {
        return { message: `send me message chat ${user}` };
    }
}
