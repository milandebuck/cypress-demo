import { Status, Todo } from '@cypress-demo/api-interfaces';
import React from 'react';
import styled from 'styled-components';
import { TodoBox } from './../todo/todo';
const Column = styled.div`
  background-color: black;
  padding: 1rem;
`;

export function StatusColumn(props: { todos: Todo[]; status: Status }) {
  return (
    <Column>
      {props.todos
        .filter(todo => todo.status === props.status)
        .map((todo, index) => (
          <TodoBox todo={todo} index={index}></TodoBox>
        ))}
      {props.children()}
    </Column>
  );
}
