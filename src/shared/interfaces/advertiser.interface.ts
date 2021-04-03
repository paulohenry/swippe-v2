import { LevelSubscriber } from '../enums/level-subscriber.enum';
import { State } from '../enums/state-users.enum';
import { TypeUsers } from '../enums/type-users.enum';

export interface IAdvertiser {
    name: string;
    email: string;
    phone: string;
    password: string;
    campany: string;
    instagram: string;
    facebook: string;
    campany_description: string;
    province: string;
    city: string;
    site: string;
    cnpjcpf: string;
    address: string;

    level_subscriber?: LevelSubscriber;
    type?: TypeUsers;
    state?: State;
}
