import { Status, Task } from '@cypress-demo/api-interfaces';

export interface BoardState {
  columnOrder: Status[];
  taskList: TaskList;
  columns: Columns;
}

export interface Columns {
  [key: string]: TaskColumn;
}

export interface TaskColumn {
  columnId: Status;
  items: string[];
}

export interface TaskList {
  [key: string]: Task;
}
