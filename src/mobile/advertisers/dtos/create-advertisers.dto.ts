import { ApiProperty } from '@nestjs/swagger';
import {
    IsEmail,
    IsOptional,
    IsString,
    Matches,
    MaxLength,
    MinLength,
} from 'class-validator';
import { Match } from '../../../shared/decorators/match.decorator';
import { IAdvertiser } from '../../../shared/interfaces/advertiser.interface';
import regexBase from '../../../shared/regex/regex';

export class CreateAdvertiserDto implements IAdvertiser {
    @IsString()
    @MaxLength(14)
    @Matches(regexBase.celular, { message: 'formato de celular inválido' })
    @ApiProperty({ required: true, example: '(13)98834-2323' })
    phone: string;

    @IsString()
    @ApiProperty({ required: true, example: 'Carlos Alberto' })
    name: string;

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

    @IsString()
    @MinLength(8)
    @MaxLength(50)
    @Match('password')
    @ApiProperty({ required: true, example: 'Teste@12345' })
    passwordConfirm: string;

    @IsString()
    @ApiProperty({ required: true, example: 'Carlos Alberto' })
    campany: string;

    @IsString()
    @Matches(regexBase.instagram, { message: 'formato de instagram inválido' })
    @ApiProperty({ required: true, example: '@teste_' })
    instagram: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ required: true, example: 'https://facebook.com/swippe' })
    facebook: string;

    @IsString()
    @ApiProperty({ required: true, example: 'descricao aqui' })
    campany_description: string;

    @IsString()
    @ApiProperty({ required: true, example: 'Santos' })
    city: string;

    @IsString()
    @ApiProperty({ required: true, example: 'SP' })
    province: string;

    @IsString()
    @ApiProperty({ required: true, example: 'https://facebook.com/swippe' })
    site: string;

    @IsString()
    @ApiProperty({ required: true, example: '56.160.915/0001-19' })
    cnpjcpf: string;

    @IsString()
    @ApiProperty({ required: true, example: 'Rua dos testes numero 100' })
    address: string;
}
