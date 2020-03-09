import { couch } from './couch.db';

export async function initCouchDb(): Promise<void> {
  try {
    await couch.db.create('tasks');
  } catch (error) {
    if (error.statusCode !== 412) {
      console.error(error);
    }
  }
}
