import { Draggable } from 'react-beautiful-dnd';
import React from 'react';
import { Task } from '@cypress-demo/api-interfaces';
import styled from 'styled-components';

export const TaskContainer = styled.div`
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
          <TaskContainer
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {this.props.task.title}
          </TaskContainer>
        )}
      </Draggable>
    );
  }
}
