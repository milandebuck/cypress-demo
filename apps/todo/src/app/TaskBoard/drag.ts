import { Status, Task } from '@cypress-demo/api-interfaces';
import { DropResult } from 'react-beautiful-dnd';
import { todoClient } from './../clients/todoClient';
import { BoardState, Columns, TaskColumn } from './models/board-state';
export async function handleOnDragEnd(
  state: BoardState,
  dragResult: DropResult
): Promise<BoardState> {
  const { destination, source, draggableId } = dragResult;
  if (hasChanged(source, destination)) {
    return;
  }
  const { columns } = state;
  //take copy to prevent mutation of inital state
  let _columns: Columns = {
    ...columns
  };

  //update backend
  let task = state.taskList[draggableId];

  task = await updateTask(task, _columns[destination.droppableId].columnId);

  const sourceColumn = removeTaskFromColumn(
    _columns[source.droppableId],
    source.index
  );
  //update columnState
  _columns = {
    ..._columns,
    [sourceColumn.columnId]: sourceColumn
  };

  const destColumn = addTaskToColumn(
    _columns[destination.droppableId],
    draggableId,
    destination.index
  );

  _columns = {
    ..._columns,
    [destColumn.columnId]: destColumn
  };
  return {
    ...state,
    columns: {
      ..._columns
    },
    taskList: {
      ...state.taskList,
      [task._id]: task
    }
  };
}

const hasChanged = (source, destination): boolean =>
  !destination ||
  (destination.index === source.index &&
    destination.droppableId === source.droppableId);

const removeTaskFromColumn = (
  column: TaskColumn,
  index: number
): TaskColumn => {
  const res = Array.from(column.items);
  res.splice(index, 1);
  return {
    ...column,
    items: res
  };
};

const addTaskToColumn = (
  column: TaskColumn,
  taskId: string,
  index = 0
): TaskColumn => {
  const res = Array.from(column.items);

  res.splice(index, 0, taskId);

  return {
    ...column,
    items: res
  };
};

const updateTask = async (task: Task, status: Status): Promise<Task> => {
  return await todoClient.update({
    ...task,
    status
  });
};
