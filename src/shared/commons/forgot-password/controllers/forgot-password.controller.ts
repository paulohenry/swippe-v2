import { Controller, Logger, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserLogged } from '../../../../shared/decorators/user-logger.decorator';
import { JwtAuthGuard } from '../../../../shared/guards/jwt-auth.guard';
import { IUserLogged } from '../../../../shared/interfaces/user-logged.interface';

@ApiTags('commons')
@Controller('forgot-password')
export class ForgotPasswordController {
    private logger: Logger;

    constructor() {
        this.logger = new Logger(ForgotPasswordController.name);
    }

    @Post('send-email')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    async sendEmail(@UserLogged() user: IUserLogged) {
        return { message: `send me email ${user}` };
    }

    @Post('put-code')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    async putRecoveryCode(@UserLogged() user: IUserLogged) {
        return { message: `put code ${user}` };
    }
}
