import { Body, Controller, Logger, Post, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthDto } from '../dtos/auth.dto';
import { AuthService } from '../services/auth.service';

@Controller('login')
@ApiTags('login')
export class AuthController {
    private logger: Logger;
    constructor(private readonly authService: AuthService) {
        this.logger = new Logger();
    }

    @Post()
    async auth(@Body(new ValidationPipe()) dto: AuthDto) {
        return await this.authService.Auth(dto);
    }
}
