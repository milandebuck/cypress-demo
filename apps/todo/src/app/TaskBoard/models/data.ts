import { Status } from '@cypress-demo/api-interfaces';

export const columnOrder = [Status.New, Status.Active, Status.Done];

export const columns = {
  [Status.New]: {
    columnId: Status.New,
    items: []
  },
  [Status.Active]: {
    columnId: Status.Active,
    items: []
  },
  [Status.Done]: {
    columnId: Status.Done,
    items: []
  }
};

export default {
  taskList: {},
  columnOrder,
  columns
};
