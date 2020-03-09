import { Task } from '@cypress-demo/api-interfaces';
import { TaskList } from '../TaskBoard/models/board-state';

const apiUrl = 'http://localhost:3333/todo';

async function get(id: string): Promise<Task | null> {
  const res = await fetch(`${apiUrl}/${id}`);
  return res ? ((await res.json()) as Task) : null;
}

async function getAll(): Promise<TaskList> {
  const res = await fetch(apiUrl);
  return await res.json();
}

async function remove(id: string, rev: string): Promise<void> {
  await fetch(`${apiUrl}/${id}/${rev}`, {
    method: 'delete'
  });
}

async function add(task: Partial<Task>): Promise<Task | null> {
  const res = await fetch(`${apiUrl}`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  });
  return res ? ((await res.json()) as Task) : null;
}

async function update(task: Task): Promise<Task> {
  const res = await fetch(`${apiUrl}`, {
    method: 'put',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  });

  return res ? ((await res.json()) as Task) : null;
}

export const todoClient = {
  get,
  remove,
  add,
  getAll,
  update
};
