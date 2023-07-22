import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT ? process.env.PORT : 8080;
export const NODE_ENV = process.env.NODE_ENV;
export const DATABASE_URL = (() => {
  switch (NODE_ENV) {
    case 'test':
      return process.env.TEST_DATABASE_URL;
    case 'development':
      return process.env.DEV_DATABASE_URL;
    default:
      return process.env.DATABASE_URL;
  }
})();
export const MIGRATIONS_PATH = (() => {
  switch (NODE_ENV) {
    case 'test':
      return 'src/migrations/*.ts';
    case 'development':
      return 'src/migrations/*.ts';
    default:
      return 'build/src/migrations/*.js';
  }
})();
