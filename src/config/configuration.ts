import * as AWS from 'aws-sdk';
import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
    MONGO_DB: {
        URL: process.env.MONGO_URL,
    },
    S3: () => {
        const s3 = new AWS.S3();
        AWS.config.update({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        });
    },
    BUCKET_NAME: process.env.AWS_S3_BUCKET_NAME,
};
