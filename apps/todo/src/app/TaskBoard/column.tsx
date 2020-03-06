import { Status, Task } from '@cypress-demo/api-interfaces';
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { TaskComponent } from './task';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightGrey;
  border-radius: 2px;
  width: 30%;
`;

const Title = styled.h3`
  padding: 8px;
`;

const List = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  transition: background-color 0.2s ease;
  min-height: 300px;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
`;

export class Column extends React.Component<{
  title: string;
  columnStatus: Status;
  tasks: Task[];
}> {
  render() {
    return (
      <Container>
        <Title>{this.props.title}</Title>
        <Droppable droppableId={this.props.title}>
          {(provided, snapshot) => {
            return (
              <List
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {this.props.tasks.map((task, index) => (
                  <TaskComponent
                    key={task._id}
                    task={task}
                    index={index}
                  ></TaskComponent>
                ))}
                {provided.placeholder}
                {this.props.children}
              </List>
            );
          }}
        </Droppable>
      </Container>
    );
  }
}
