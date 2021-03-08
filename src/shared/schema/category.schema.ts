import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Subcategory } from './subcategory.schema';

export type CategoryDocument = Category & Document;

@Schema({ timestamps: true, collection: 'categories' })
export class Category {
    @Prop()
    name: string;

    @Prop()
    image: number;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Subcategory' }] })
    subcategories: Subcategory[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);
