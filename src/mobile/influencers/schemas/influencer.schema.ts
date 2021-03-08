import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Genre } from '../../../enums/genre.enum';
import { LevelSubscriber } from '../../../enums/level-subscriber.enum';

export type InfluencerDocument = Influencer & Document;

@Schema({ timestamps: true, collection: 'influencers' })
export class Influencer {
    @Prop()
    name: string;

    @Prop()
    level_subscriber: LevelSubscriber;

    @Prop()
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
    state: string;

    @Prop()
    phone: string;

    @Prop()
    expoPushToken: string;

    /* @Prop({ type: [{ type: Types.ObjectId, ref: 'Subcategory' }] }) */
    subcategories?: string[];
}

export const InfluencerSchema = SchemaFactory.createForClass(Influencer);
