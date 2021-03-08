import { Document, FilterQuery, Model, Query, QueryOptions } from 'mongoose';
import { SoftDeleteModel } from 'mongoose-delete';
import { BaseInterfaceRepository } from './base.interface.repository';

export type BaseModel<T extends Document> = Model<T> & SoftDeleteModel<T>;

export abstract class BaseAbstractRepository<T extends Document>
  implements BaseInterfaceRepository<T> {
  private entity: BaseModel<T>;

  protected constructor(entity: BaseModel<T>) {
    this.entity = entity;
  }

  public async create(
    data: Pick<T, Exclude<keyof T, keyof Document>> | { id?: string }
  ): Promise<T> {
    const newDocument = new this.entity(data);
    return await newDocument.save();
  }

  public async findOneById(id: string): Promise<T | null> {
    return await this.entity.findById(id);
  }

  public async findOne(
    filter?: FilterQuery<T>,
    projection?: unknown | null,
    options?: QueryOptions | null
  ): Promise<Query<T | null, T>> {
    return await this.entity.findOne(filter, projection, options);
  }

  public async findWithRelations(relations: string[]): Promise<T[]> {
    const query = this.entity.find();
    relations.forEach((relation) => {
      query.populate(relation);
    });
    return query.exec();
  }

  public async findAll(): Promise<T[]> {
    return await this.entity.find();
  }

  async deleteById(id: string): Promise<void> {
    const entity = await this.findOneById(id);
    if (entity) {
      await await this.entity.deleteById(id);
    }
  }
}
