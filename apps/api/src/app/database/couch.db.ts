import * as nano from 'nano';

export const couch = nano(process.env.COUChDB_URL || 'http://127.0.0.1:5984');
