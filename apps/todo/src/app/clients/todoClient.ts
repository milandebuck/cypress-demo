import { Todo } from '@cypress-demo/api-interfaces';

const apiUrl = '/todo';

async function get(id: string): Promise<Todo | null> {
  const res = await fetch(`${apiUrl}/${id}`);
  return res ? ((await res.json()) as Todo) : null;
}

async function remove(id: string, rev: string): Promise<void> {
  await fetch(`${apiUrl}/${id}/${rev}`, {
    method: 'delete'
  });
}

async function add(todo: Todo): Promise<Todo | null> {
  const res = await fetch(`${apiUrl}`, {
    method: 'post',
    body: (todo as unknown) as BodyInit
  });
  return res ? ((await res.json()) as Todo) : null;
}

export const todoClient = {
  get,
  remove,
  add
};
