import { Status } from './status-enum';

export interface Task {
  _id: string;
  _rev: string;
  title: string;
  status: Status;
  content: string;
  lastUpdated: Date;
}
