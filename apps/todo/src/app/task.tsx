import { Task } from '@cypress-demo/api-interfaces';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 8px;
  padding: 8px;
  border: 1px solid lightGrey;
  border-radius: 2px;
  background-color: white;
`;

export class TaskComponent extends React.Component<{
  task: Task;
  index: number;
}> {
  render() {
    return (
      <Draggable draggableId={this.props.task._id} index={this.props.index}>
        {provided => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {this.props.task.title}
          </Container>
        )}
      </Draggable>
    );
  }
}
