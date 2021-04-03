import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    ArrayMaxSize,
    ArrayMinSize,
    IsArray,
    IsEmail,
    IsEnum,
    IsMongoId,
    IsString,
    Matches,
    MaxLength,
    MinLength,
    ValidateNested,
} from 'class-validator';
import { Match } from '../../../shared/decorators/match.decorator';
import { Genre } from '../../../shared/enums/genre.enum';
import { IInfluencer } from '../../../shared/interfaces/influencer.interface';
import regexBase from '../../../shared/regex/regex';
export class CreateInfluencerDto implements IInfluencer {
    @IsString()
    @ApiProperty({ required: true, example: 'Carlos Alberto' })
    name: string;

    @IsEnum(Genre)
    @Matches(regexBase.letras, { message: 'apenas M ou F' })
    @ApiProperty({ required: true, example: 'M' })
    genre: Genre;

    @IsString()
    @Matches(regexBase.data, {
        message: 'formato de data para aniversário inválido',
    })
    @ApiProperty({ required: true, example: '01/01/1990' })
    birthDay: string;

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
    @Matches(regexBase.instagram, { message: 'formato de instagram inválido' })
    @ApiProperty({ required: true, example: '@teste_' })
    instagram: string;

    @IsString()
    @ApiProperty({ required: true, example: 'Santos' })
    city: string;

    @IsString()
    @ApiProperty({ required: true, example: 'SP' })
    province: string;

    @IsString()
    @MaxLength(14)
    @Matches(regexBase.celular, { message: 'formato de celular inválido' })
    @ApiProperty({ required: true, example: '(13)98834-2323' })
    phone: string;

    @IsArray()
    @ArrayMaxSize(5)
    @ArrayMinSize(1)
    @ValidateNested({ each: true })
    @Type(() => ReferenceSubcategoryForRegisterInfluencer)
    @ApiProperty({
        required: true,
        type: () => [ReferenceSubcategoryForRegisterInfluencer],
    })
    subcategories?: ReferenceSubcategoryForRegisterInfluencer[];
}

class ReferenceSubcategoryForRegisterInfluencer {
    @IsMongoId()
    @ApiProperty({ required: true, example: '6067b66f4a2752bdb32e2bac' })
    _id: string;
}
