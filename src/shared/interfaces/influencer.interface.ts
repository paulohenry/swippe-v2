import { Genre } from '../enums/genre.enum';
import { LevelSubscriber } from '../enums/level-subscriber.enum';
import { State } from '../enums/state-users.enum';
import { ISubcategory } from './subcategory.interface';

export interface IInfluencer {
    name: string;
    level_subscriber: LevelSubscriber;
    genre: Genre;
    birthDay: Date;
    email: string;
    password: string;
    instagram: string;
    active: State;
    city: string;
    state: string;
    phone: string;
    expoPushToken: string;
    subcategories?: ISubcategory[];
}
