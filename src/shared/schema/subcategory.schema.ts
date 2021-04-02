import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ISubcategory } from '../interfaces/subcategory.interface';
import { Category } from './category.schema';
export type SubcategoryDocument = Subcategory & Document;

@Schema({ timestamps: true, collection: 'subcategories' })
export class Subcategory implements ISubcategory {
    @Prop()
    name: string;

    @Prop()
    image: number;

    @Prop()
    icon: string;

    @Prop({ type: Types.ObjectId, ref: 'Category' })
    idCategory: Category;
}

export const SubcategorySchema = SchemaFactory.createForClass(Subcategory);
