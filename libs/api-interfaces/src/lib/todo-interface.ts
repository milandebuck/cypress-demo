import { Status } from './status-enum';

export interface Todo {
  _id: string;
  title: string;
  status: Status;
}
