import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    ArrayMaxSize,
    ArrayMinSize,
    IsArray,
    IsDateString,
    IsEnum,
    IsMongoId,
    IsString,
    MaxLength,
    ValidateNested,
} from 'class-validator';
import { Genre } from '../../../shared/enums/genre.enum';
import { LevelSubscriber } from '../../../shared/enums/level-subscriber.enum';
import { State } from '../../../shared/enums/state-users.enum';
import { IInfluencer } from '../../../shared/interfaces/influencer.interface';
export class CreateInfluencerDto implements IInfluencer {
    @IsString()
    @ApiProperty()
    name: string;

    @IsEnum(LevelSubscriber)
    @ApiProperty()
    level_subscriber: LevelSubscriber;

    @IsEnum(Genre)
    @ApiProperty()
    genre: Genre;

    @IsDateString()
    @ApiProperty()
    birthDay: Date;

    @IsString()
    @ApiProperty()
    email: string;

    @IsString()
    @ApiProperty()
    password: string;

    @IsString()
    @ApiProperty()
    instagram: string;

    @IsString()
    @ApiProperty()
    city: string;

    @IsString()
    @ApiProperty()
    state: string;

    @IsString()
    @MaxLength(2)
    @IsEnum(State)
    @ApiProperty()
    active: State;

    @IsString()
    @MaxLength(14)
    @ApiProperty()
    phone: string;

    @IsString()
    @ApiProperty()
    expoPushToken: string;

    @IsArray()
    @ArrayMaxSize(5)
    @ArrayMinSize(2)
    @ValidateNested({ each: true })
    @Type(() => Subcategory)
    @ApiProperty()
    subcategories?: Subcategory[];
}

class Subcategory {
    @IsMongoId()
    @ApiProperty()
    _id: string;
}
