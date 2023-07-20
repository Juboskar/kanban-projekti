import http from 'http';
import app from './src/app';
import { PORT } from './src/utils/config';
import logger from './src/utils/logger';

const server = http.createServer(app);

server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
