import { Todo } from '@cypress-demo/api-interfaces';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

export function TodoBox(props: { todo: Todo; index: number }) {
  const { todo } = props;

  const TodoContainer = styled.div`
    padding: 1rem;
    border: 1px solid black;
  `;
  return (
    <Draggable draggableId={todo._id} index={props.index}>
      {provided => (
        <TodoContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          innerRef={provided.innerRef}
        >
          <h2>{todo.title}</h2>
        </TodoContainer>
      )}
    </Draggable>
  );
}
