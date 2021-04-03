import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
    AWS_BUCKET_URL_BASE: process.env.AWS_BUCKET_URL_BASE,
    AWS_REGION: process.env.AWS_REGION,
};
