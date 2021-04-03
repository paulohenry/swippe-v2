import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ICategory } from '../interfaces/category.interface';
export type CategoryDocument = Category & Document;
@Schema({ timestamps: true, collection: 'categories' })
export class Category implements ICategory {
    @Prop()
    name: string;

    @Prop()
    image: number;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
