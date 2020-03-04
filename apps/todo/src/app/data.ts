import { Status } from '@cypress-demo/api-interfaces';

export const taskList = {
  'todo-1': {
    _id: 'todo-1',
    status: Status.New,
    title: 'todo-1'
  },
  'todo-2': {
    _id: 'todo-2',
    status: Status.New,
    title: 'todo-2'
  },
  'todo-3': {
    _id: 'todo-3',
    status: Status.New,
    title: 'todo-3'
  },
  'todo-4': {
    _id: 'todo-4',
    status: Status.New,
    title: 'todo-4'
  },
  'todo-5': {
    _id: 'todo-5',
    status: Status.New,
    title: 'todo-5'
  }
};

export const columnOrder = [Status.New];

export const columns = {
  New: {
    columnId: Status.New,
    items: ['todo-1', 'todo-2', 'todo-3', 'todo-4', 'todo-5']
  }
};

export default {
  taskList,
  columnOrder,
  columns
};
