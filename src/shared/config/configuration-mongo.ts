import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
    MONGO_DB: {
        URL: process.env.MONGO_URL,
    },
};
