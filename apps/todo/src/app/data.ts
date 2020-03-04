import { Status, Task } from '@cypress-demo/api-interfaces';

export const taskList: Task[] = [
  {
    _id: 'todo-1',
    status: Status.New,
    title: 'todo-1'
  },
  {
    _id: 'todo-2',
    status: Status.New,
    title: 'todo-2'
  },
  {
    _id: 'todo-3',
    status: Status.New,
    title: 'todo-3'
  },
  {
    _id: 'todo-4',
    status: Status.New,
    title: 'todo-4'
  },
  {
    _id: 'todo-5',
    status: Status.New,
    title: 'todo-5'
  }
];

export const columnOrder = [Status.New];
