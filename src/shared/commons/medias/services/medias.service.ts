import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { v4 as uuid } from 'uuid';
import { IUserLogged } from '../../../../shared/interfaces/user-logged.interface';
import { config } from '../../../config/upload';
import {
    QueriesMedia,
    QueriesMediaOwner,
    QueriesMediaTypeUser,
} from '../dtos/queries.dto';
import { MediasRepository } from '../repositories/medias.repository';
@Injectable()
export class FilesService {
    constructor(private mediasRepository: MediasRepository) {}

    async uploadPublicFile(
        dataBuffer: Buffer,
        filename: string,
        user: IUserLogged,
        queryMedia: QueriesMedia,
        queryOwner: QueriesMediaOwner,
        queryTypeUser: QueriesMediaTypeUser,
    ) {
        const s3 = new S3({
            region: config.AWS_REGION,
            sslEnabled: true,
            maxRetries: 3,
            accessKeyId: config.AWS_ACCESS_KEY_ID,
            secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
        });
        const uploadResult = await s3
            .upload({
                Bucket: config.AWS_BUCKET_NAME,
                Body: dataBuffer,
                Key: `${uuid()}-${filename}`,
                ACL: 'public-read',
            })
            .promise();
        console.log(uploadResult);
    }

    async deletePublicFile(fileId: number) {
        const file = await this.mediasRepository.findOne({ id: fileId });
        const s3 = new S3();
        await s3
            .deleteObject({
                Bucket: config.AWS_BUCKET_NAME,
                Key: file.key,
            })
            .promise();
        return await this.mediasRepository.deleteOneMediaByid(file._id);
    }
}
