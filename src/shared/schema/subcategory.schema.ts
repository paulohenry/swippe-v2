import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Category } from './category.schema';

export type SubcategoryDocument = Subcategory & Document;

@Schema({ timestamps: true, collection: 'subcategories' })
export class Subcategory {
    @Prop()
    name: string;

    @Prop()
    image: number;

    @Prop()
    icon: string;

    @Prop({ type: Types.ObjectId, ref: 'Category' })
    category: Category;
}

export const SubcategorySchema = SchemaFactory.createForClass(Subcategory);
