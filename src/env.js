import dotenv from 'dotenv';

const argList = process.argv.slice(2);
const args = {};

for (const str of argList) {
    const [key, value] = str.split('=');

    if (key && value && key.startsWith('--')) {
        args[key.slice(2)] = value;
    }
}

dotenv.config({
    path: 'src/.env.' + args.env,
    quiet: true,
});

export const NODE_ENV = process.env.NODE_ENV ?? 'dev';
export const PORT = +process.env.PORT ?? 5517;
export const TITLE = process.env.TITLE ?? 'Project title';
export const DB_HOST = process.env.DB_HOST ?? 'localhost';
export const DB_PORT = +process.env.DB_PORT ?? 3306;
export const DB_DATABASE = process.env.DB_DATABASE ?? 'test_db';
export const DB_USER = process.env.DB_USER ?? 'test_user';
export const DB_PASSWORD = process.env.DB_PASSWORD ?? 'test_password';
export const COOKIE_MAX_AGE = +process.env.COOKIE_MAX_AGE ?? 3600;