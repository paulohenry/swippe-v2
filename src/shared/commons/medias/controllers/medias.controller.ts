import {
    Controller,
    Logger,
    Patch,
    Query,
    UploadedFile,
    UseGuards,
    UseInterceptors,
    ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
    ApiBearerAuth,
    ApiBody,
    ApiConsumes,
    ApiQuery,
    ApiTags,
} from '@nestjs/swagger';
import { UserLogged } from '../../../../shared/decorators/user-logger.decorator';
import { JwtAuthGuard } from '../../../../shared/guards/jwt-auth.guard';
import { IUserLogged } from '../../../../shared/interfaces/user-logged.interface';
import { TypeMedia } from '../../../enums/type-media.enum';
import {
    QueriesMedia,
    QueriesMediaOwner,
    QueriesMediaTypeUser,
} from '../dtos/queries.dto';
import { FilesService } from '../services/medias.service';
@ApiTags('commons')
@Controller('medias')
export class MediasController {
    private logger: Logger;

    constructor(private readonly mediaService: FilesService) {
        this.logger = new Logger(MediasController.name);
    }

    @Patch('upload')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiQuery({
        name: 'typeMedia',
        enum: TypeMedia,
        required: false,
        description: 'Qualifique a midia dentro do sistema',
    })
    @ApiQuery({
        name: 'typeOwer',
        enum: ['INFLUENCER', 'ADVERTISER', 'APPLICATION'],
        required: true,
        description:
            'Escolha o tipo de usuário, ou se a imagem é interna da aplicação',
    })
    @ApiQuery({
        name: 'owner',
        type: 'string',
        required: false,
        description: '',
        example: '6067d1f802d70debf9f0ff75',
    })
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        type: 'multipart/form-data',
        required: true,
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    })
    @UseInterceptors(FileInterceptor('file'))
    async upload(
        @UploadedFile() file: Express.Multer.File,
        @UserLogged() user: IUserLogged,
        @Query(new ValidationPipe()) queryMedia: QueriesMedia,
        @Query(new ValidationPipe()) queryOwner: QueriesMediaOwner,
        @Query(new ValidationPipe()) queryTypeUser: QueriesMediaTypeUser,
    ) {
        await this.mediaService.uploadPublicFile(
            file.buffer,
            file.originalname,
            user,
            queryMedia,
            queryOwner,
            queryTypeUser,
        );
    }
}
