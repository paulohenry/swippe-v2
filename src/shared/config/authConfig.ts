import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
    JWT: {
        SECRET: process.env.JWT_SECRET,
    },
};
