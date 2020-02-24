import { Todo } from '@cypress-demo/api-interfaces';
import { MaybeDocument } from 'nano';
import { couch } from './../database/couch.db';

const todos = couch.use('todos');
async function create(todo: Partial<Todo>): Promise<Todo> {
  const item: MaybeDocument = Object.assign({}, todo, {});
  return ((await todos.insert(item)) as unknown) as Todo;
}

async function get(id: _string) {
  todos.get;
}

export default {
  create
};
