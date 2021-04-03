import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { IInfluencerSubjects } from '../../../shared/interfaces/influencer-subjects.interface';
import { Influencer } from './influencer.schema';

export type InfluencerSubjectsDocument = InfluencerSubjects & Document;

@Schema({ timestamps: true, collection: 'influencer-subjects' })
export class InfluencerSubjects implements IInfluencerSubjects {
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Influencer',
        unique: true,
    })
    idInfluencer: Influencer;
    @Prop()
    description: string;
    @Prop()
    subject: string;
    @Prop()
    subject_value1: number;
    @Prop()
    subject2: string;
    @Prop()
    subject_value2: number;
    @Prop()
    subject3: string;
    @Prop()
    subject_value3: number;
    @Prop()
    subject4: string;
    @Prop()
    subject_value4: number;
    @Prop()
    subject5: string;
    @Prop()
    subject_value5: number;
}

export const InfluencerSubjectsSchema = SchemaFactory.createForClass(
    InfluencerSubjects,
);
