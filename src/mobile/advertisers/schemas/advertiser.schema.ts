import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IAdvertiser } from '../../../shared/interfaces/advertiser.interface';

export type AdvertiserDocument = Advertiser & Document;

@Schema({ timestamps: true, collection: 'advertiser' })
export class Advertiser implements IAdvertiser {}

export const AdvertiserSchema = SchemaFactory.createForClass(Advertiser);
