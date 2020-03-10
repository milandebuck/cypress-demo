const couch = require('nano')('http://127.0.0.1:5984');

async function resetDatabase() {
  await couch.db.destroy('tasks');
  await couch.db.create('tasks');
}

module.exports = (on, config) => {
  on('task', {
    resetDb() {
      return new Promise(resolve => {
        resetDatabase().then(() => resolve(null));
      });
    }
  });
};
