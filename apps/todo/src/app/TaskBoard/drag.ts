import { DropResult } from 'react-beautiful-dnd';
import { BoardState, Columns, TaskColumn } from './models/board-state';

export function handleOnDragEnd(
  state: BoardState,
  dragResult: DropResult
): BoardState {
  const { destination, source, draggableId } = dragResult;
  if (hasChanged(source, destination)) {
    return;
  }
  const { columns } = state;
  //take copy to prevent mutation of inital state
  let _columns: Columns = {
    ...columns
  };

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
