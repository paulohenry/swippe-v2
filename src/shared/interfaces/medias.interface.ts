import { TypeMedia, TypeOwnerMedia } from '../enums/type-media.enum';
export interface IMedias {
    key: string;
    typeOwner: TypeOwnerMedia;
    owner: string;
    typeMedia: TypeMedia;
}
