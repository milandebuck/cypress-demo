import { Todo } from '@cypress-demo/api-interfaces';
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

export function TodoGrid(props: { todos: Todo[] }) {
  const onDragEnd = result => {
    console.log(result);
  };

  return (
    <div className="grid-wrapper">
      <DragDropContext></DragDropContext>
    </div>
  );
}
