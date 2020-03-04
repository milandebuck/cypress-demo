import { Status } from './status-enum';

export interface Task {
  _id: string;
  title: string;
  status: Status;
}
