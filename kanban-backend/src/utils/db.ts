import { Sequelize } from 'sequelize';
import { DATABASE_URL, MIGRATIONS_PATH } from './config';
import { Umzug, SequelizeStorage } from 'umzug';
import logger from './logger';

export const sequelize = new Sequelize(DATABASE_URL as string);

const migrator = new Umzug({
  migrations: {
    glob: MIGRATIONS_PATH,
  },
  storage: new SequelizeStorage({ sequelize, tableName: 'migrations' }),
  context: sequelize.getQueryInterface(),
  logger: console,
});

export const runMigrations = async () => {
  const migrations = await migrator.up();
  logger.info('Migrations up to date ');
  migrations.map((mig) => logger.info(mig.name));
};

export const rollbackMigration = async () => {
  await sequelize.authenticate();
  await migrator.down();
};

export const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await runMigrations();
    logger.info('database connected');
  } catch (err) {
    logger.error('connecting database failed');
    return process.exit(1);
  }
  return null;
};
