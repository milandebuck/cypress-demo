import { Task } from '@cypress-demo/api-interfaces';

const apiUrl = '/todo';

async function get(id: string): Promise<Task | null> {
  const res = await fetch(`${apiUrl}/${id}`);
  return res ? ((await res.json()) as Task) : null;
}

async function remove(id: string, rev: string): Promise<void> {
  await fetch(`${apiUrl}/${id}/${rev}`, {
    method: 'delete'
  });
}

async function add(todo: Task): Promise<Task | null> {
  const res = await fetch(`${apiUrl}`, {
    method: 'post',
    body: (todo as unknown) as BodyInit
  });
  return res ? ((await res.json()) as Task) : null;
}

export const todoClient = {
  get,
  remove,
  add
};
