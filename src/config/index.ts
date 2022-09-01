import 'dotenv/config';

export const JOO = {
    PORT: process.env.PORT,
    DB_HOST: process.env.HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.JOO_PASSWORD,
    DB_NAME: process.env.JOO_DATABASE,
    DB_URL: process.env.DB_URL,
};
