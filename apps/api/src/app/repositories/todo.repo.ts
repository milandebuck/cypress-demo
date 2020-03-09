import { Task } from '@cypress-demo/api-interfaces';
import { MaybeDocument } from 'nano';
import { couch } from './../database/couch.db';

const tasks = couch.use('tasks');
async function create(task: Partial<Task>): Promise<Task | null> {
  try {
    const item: MaybeDocument = Object.assign({}, task);

    const res = await tasks.insert(item);

    return {
      ...task,
      _id: res.id,
      _rev: res.rev
    };
  } catch (e) {
    console.error(e);
    return null;
  }
}

async function get(id: string): Promise<Task | null> {
  try {
    const res = await tasks.get(id);
    return (res as unknown) as Task;
  } catch (e) {
    console.error(e);
    return null;
  }
}

async function getAll() {
  try {
    const dbresult = await tasks.list({ include_docs: true });
    const res = dbresult.rows.reduce(
      (aggragate, item) =>
        Object.assign(aggragate, {
          [item.id]: item.doc
        }),
      {}
    );
    return res;
  } catch (e) {
    console.error(e);
    return null;
  }
}

async function remove(id: string, rev: string): Promise<void> {
  try {
    await tasks.destroy(id, rev);
  } catch (e) {
    console.error(e);
  }
}

async function update(task: Task): Promise<Task> {
  const res = await tasks.insert(task);
  return {
    ...task,
    _id: res.id,
    _rev: res.rev
  };
}

export default {
  create,
  get,
  remove,
  getAll,
  update
};
