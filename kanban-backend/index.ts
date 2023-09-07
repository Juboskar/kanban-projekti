import http from 'http';
import app from './src/app';
import { PORT } from './src/utils/config';
import logger from './src/utils/logger';
import { connectToDatabase } from './src/utils/db';

const server = http.createServer(app);

(async () => {
  await connectToDatabase();
  server.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
  });
})();
