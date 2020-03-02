import React from 'react';
import Droppable from 'react-beautiful-dnd';
import { StatusColumn } from '../todo-row/todo-row';

export function DraggableRow(props) {
  return (
    <Droppable droppableId={props.todo._id}>
      {provided => (
          <StatusColumn {...provided.draggableProps} innerRef={provided.innerRef}>
              {provided.placeholder}
          </StatusColumn>
      )}
    </Droppable>
  );
}
