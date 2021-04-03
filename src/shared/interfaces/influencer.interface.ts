import { Genre } from '../enums/genre.enum';
import { LevelSubscriber } from '../enums/level-subscriber.enum';
import { State } from '../enums/state-users.enum';
import { TypeUsers } from '../enums/type-users.enum';
import { IInfluencerSubjects } from './influencer-subjects.interface';
import { ISubcategory } from './subcategory.interface';

export interface IInfluencer {
    name: string;
    genre: Genre;
    birthDay: String;
    email: string;
    password: string;
    instagram: string;
    city: string;
    province: string;
    phone: string;
    subcategories?: ISubcategory[];
    type?: TypeUsers;
    state?: State;
    level_subscriber?: LevelSubscriber;
    subjects?: IInfluencerSubjects;
}
