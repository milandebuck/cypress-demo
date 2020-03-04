import { Task } from '@cypress-demo/api-interfaces';
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { TaskComponent } from './task';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightGrey;
  border-radius: 2px;
`;

const Title = styled.h3`
  padding: 8px;
`;

const List = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
`;

export class Column extends React.Component<{
  title: string;
  tasks: Task[];
}> {
  render() {
    return (
      <Container>
        <Title>{this.props.title}</Title>
        <Droppable droppableId={this.props.title}>
          {provided => {
            return (
              <List ref={provided.innerRef} {...provided.droppableProps}>
                {this.props.tasks.map((task, index) => (
                  <TaskComponent
                    key={task._id}
                    task={task}
                    index={index}
                  ></TaskComponent>
                ))}
                {provided.placeholder}
              </List>
            );
          }}
        </Droppable>
      </Container>
    );
  }
}
