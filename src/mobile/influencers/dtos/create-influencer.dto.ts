import { ApiProperty } from '@nestjs/swagger';
import { Genre } from '../../../enums/genre.enum';
import { LevelSubscriber } from '../../../enums/level-subscriber.enum';

class SubcategoriesDto {
    _id: string;
}

export class CreateInfluencerDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    level_subscriber: LevelSubscriber;

    @ApiProperty()
    genre: Genre;

    @ApiProperty()
    birthDay: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    instagram: string;

    @ApiProperty()
    city: string;

    @ApiProperty()
    state: string;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    expoPushToken: string;

    @ApiProperty()
    subcategories: SubcategoriesDto[];
}
