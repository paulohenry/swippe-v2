import { ApiProperty } from '@nestjs/swagger';
import {
    IsEmail,
    IsString,
    Matches,
    MaxLength,
    MinLength,
} from 'class-validator';
import regexBase from '../../../shared/regex/regex';

export class AuthDto {
    @IsString()
    @IsEmail({}, { message: 'formato de email inválido' })
    @ApiProperty({ required: true, example: 'example@example.com.br' })
    email: string;

    @IsString()
    @MinLength(8)
    @MaxLength(50)
    @ApiProperty({ required: true, example: 'Teste@12345' })
    @Matches(regexBase.senhaForte, { message: 'senha muito fraca' })
    password: string;
}
