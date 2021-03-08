import { Injectable, Req, Res } from '@nestjs/common';
import * as multer from 'multer';
import * as multerS3 from 'multer-s3';
import { config } from '../../config/configuration';

@Injectable()
export class ImageUploadService {
    constructor() {}

    async fileupload(@Req() req, @Res() res) {
        try {
            this.upload(req, res, function (error) {
                if (error) {
                    console.log(error);
                    return res
                        .status(404)
                        .json(`Failed to upload image file: ${error}`);
                }
                return res.status(201).json(req.files[0].location);
            });
        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .json(`Failed to upload image file: ${error}`);
        }
    }

    upload = multer({
        storage: multerS3({
            s3: config.S3,
            bucket: config.BUCKET_NAME,
            acl: 'public-read',
            key: function (request, file, cb) {
                cb(null, `${Date.now().toString()} - ${file.originalname}`);
            },
        }),
    }).array('upload', 1);
}
