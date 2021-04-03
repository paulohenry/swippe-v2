import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { TypeMedia, TypeOwnerMedia } from '../../../enums/type-media.enum';
import { IMedias } from '../../../interfaces/medias.interface';
export type MediasDocument = Medias & Document;

@Schema({ timestamps: true, collection: 'medias' })
export class Medias implements IMedias {
    @Prop()
    key: string;

    @Prop({ enum: TypeOwnerMedia })
    typeOwner: TypeOwnerMedia;

    @Prop({ type: mongoose.Schema.Types.ObjectId })
    owner: string;

    @Prop({ enum: TypeMedia })
    typeMedia: TypeMedia;
}

export const MediasSchema = SchemaFactory.createForClass(Medias);
