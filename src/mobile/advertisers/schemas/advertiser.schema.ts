import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { LevelSubscriber } from '../../../shared/enums/level-subscriber.enum';
import { State } from '../../../shared/enums/state-users.enum';
import { TypeUsers } from '../../../shared/enums/type-users.enum';
import { IAdvertiser } from '../../../shared/interfaces/advertiser.interface';

export type AdvertiserDocument = Advertiser & Document;

@Schema({ timestamps: true, collection: 'advertiser' })
export class Advertiser implements IAdvertiser {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    phone: string;

    @Prop()
    password: string;

    @Prop()
    campany: string;

    @Prop()
    instagram: string;

    @Prop()
    facebook: string;

    @Prop()
    campany_description: string;

    @Prop()
    province: string;

    @Prop()
    city: string;

    @Prop()
    site: string;

    @Prop()
    cnpjcpf: string;

    @Prop()
    address: string;

    @Prop({
        type: 'string',
        enum: LevelSubscriber,
        default: LevelSubscriber.FREE,
    })
    level_subscriber: LevelSubscriber;

    @Prop({ type: 'string', enum: State, default: State.INATIVO })
    state: State;

    @Prop({ type: 'string', enum: TypeUsers, default: TypeUsers.ADVERTISER })
    type: TypeUsers;
}

export const AdvertiserSchema = SchemaFactory.createForClass(Advertiser);
