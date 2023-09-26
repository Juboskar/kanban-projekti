import { connectToDatabase } from '../../src/utils/db';

export default async () => {
  await connectToDatabase();
};
