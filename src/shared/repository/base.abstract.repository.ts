import {
    Document,
    FilterQuery,
    Model,
    //@ts-ignore
    PaginateModel,
    //@ts-ignore
    PaginateResult,
    Query,
    QueryOptions,
} from 'mongoose';
import { BaseInterfaceRepository } from './base.interface.repository';

export type BaseModel<T extends Document> = Model<T> & PaginateModel<T>;
export abstract class BaseAbstractRepository<T extends Document>
    implements BaseInterfaceRepository<T> {
    private entity: BaseModel<T>;

    protected constructor(entity: BaseModel<T>) {
        this.entity = entity;
    }

    public async create(
        data: Pick<T, Exclude<keyof T, keyof Document>> | { id?: string },
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
        options?: QueryOptions | null,
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
    async findPaginated(
        options: any,
        filters?: any,
    ): Promise<PaginateResult<any>> {
        const paginatedResults = await this.entity.paginate(
            filters ? filters : {},
            {
                ...options,
            },
        );
        return {
            totalDocs: paginatedResults.totalDocs,
            limit: paginatedResults.limit,
            totalPages: paginatedResults.totalPages,
            page: paginatedResults.page,
            pagingCounter: paginatedResults.pagingCounter,
            hasPrevPage: paginatedResults.hasPrevPage,
            hasNextPage: paginatedResults.hasNextPage,
            prevPage: paginatedResults.prevPage,
            nextPage: paginatedResults.nextPage,
            docs: paginatedResults.docs,
        };
    }
}
