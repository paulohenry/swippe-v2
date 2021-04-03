import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Genre } from '../../../shared/enums/genre.enum';
import { LevelSubscriber } from '../../../shared/enums/level-subscriber.enum';
import { State } from '../../../shared/enums/state-users.enum';
import { TypeUsers } from '../../../shared/enums/type-users.enum';
import { IInfluencer } from '../../../shared/interfaces/influencer.interface';
import { Subcategory } from '../../../shared/schema/subcategory.schema';
import { InfluencerSubjects } from './influencer-subjects.schema';

export type InfluencerDocument = Influencer & Document;

@Schema({ timestamps: true, collection: 'influencers' })
export class Influencer implements IInfluencer {
    @Prop()
    name: string;

    @Prop({ type: 'string', enum: Genre })
    genre: Genre;

    @Prop()
    birthDay: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    instagram: string;

    @Prop()
    city: string;

    @Prop()
    province: string;

    @Prop()
    phone: string;

    @Prop({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subcategory' }],
    })
    subcategories?: Subcategory[];

    @Prop({
        type: 'string',
        enum: LevelSubscriber,
        default: LevelSubscriber.FREE,
    })
    level_subscriber: LevelSubscriber;

    @Prop({ type: 'string', enum: State, default: State.INATIVO })
    state: State;

    @Prop({ type: 'string', enum: TypeUsers, default: TypeUsers.INFLUENCER })
    type: TypeUsers;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'InfluencerSubjects',
    })
    subjects?: InfluencerSubjects;
}

export const InfluencerSchema = SchemaFactory.createForClass(Influencer);
