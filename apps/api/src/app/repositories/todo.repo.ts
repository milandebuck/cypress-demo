import { Todo } from '@cypress-demo/api-interfaces';
import { MaybeDocument } from 'nano';
import { couch } from './../database/couch.db';

const todos = couch.use('todos');
async function create(todo: Partial<Todo>): Promise<Todo | null> {
  try {
    const item: MaybeDocument = Object.assign({}, todo);
    return ((await todos.insert(item)) as unknown) as Todo;
  } catch (e) {
    console.error(e);
    return null;
  }
}

async function get(id: string): Promise<Todo | null> {
  try {
    const res = await todos.get(id);
    return (res as unknown) as Todo;
  } catch (e) {
    console.error(e);
    return null;
  }
}

async function remove(id: string, rev: string): Promise<void> {
  try {
    await todos.destroy(id, rev);
  } catch (e) {
    console.error(e);
  }
}

export default {
  create,
  get,
  remove
};
