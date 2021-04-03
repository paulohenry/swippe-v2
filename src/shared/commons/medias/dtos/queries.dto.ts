import { IsEnum, IsMongoId, IsOptional } from 'class-validator';
import { TypeMedia } from '../../../enums/type-media.enum';
export class QueriesMedia {
    @IsEnum(TypeMedia)
    typeMedia: string;
}

export class QueriesMediaTypeUser {
    @IsEnum(['INFLUENCER', 'ADVERTISER', 'APPLICATION'])
    typeOwer: string;
}

export class QueriesMediaOwner {
    @IsMongoId()
    @IsOptional()
    owner: string;
}
