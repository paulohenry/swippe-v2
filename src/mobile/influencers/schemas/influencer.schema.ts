import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Genre } from '../../../shared/enums/genre.enum';
import { LevelSubscriber } from '../../../shared/enums/level-subscriber.enum';
import { State } from '../../../shared/enums/state-users.enum';
import { IInfluencer } from '../../../shared/interfaces/influencer.interface';
import { Subcategory } from '../../../shared/schema/subcategory.schema';
export type InfluencerDocument = Influencer & Document;

@Schema({ timestamps: true, collection: 'influencers' })
export class Influencer implements IInfluencer {
    @Prop()
    name: string;

    @Prop({ type: 'string', enum: LevelSubscriber })
    level_subscriber: LevelSubscriber;

    @Prop({ type: 'string', enum: Genre })
    genre: Genre;

    @Prop()
    birthDay: Date;

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

    @Prop({ type: 'string', enum: State })
    active: State;

    @Prop()
    phone: string;

    @Prop()
    expoPushToken: string;

    @Prop({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subcategory' }],
    })
    subcategories?: Subcategory[];
}

export const InfluencerSchema = SchemaFactory.createForClass(Influencer);
