import { Task } from '@cypress-demo/api-interfaces';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { TaskDate } from './date';

export const TaskContainer = styled.div`
  margin-bottom: 8px;
  padding: 8px;
  border: 1px solid lightGrey;
  border-radius: 2px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
`;
export const TaskTitle = styled.h3`
  padding-bottom: 4px;
  margin: 0;
`;

export const TaskContent = styled.p`
  color: grey;
  font-style: italic;
  margin: 0;
`;

export class TaskComponent extends React.Component<{
  task: Task;
  index: number;
}> {
  render() {
    const { task, index } = this.props;
    return (
      <Draggable draggableId={this.props.task._id} index={this.props.index}>
        {(provided, snapshot) => (
          <TaskContainer
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            data-cy={`task-${index}`}
          >
            <TaskTitle data-cy="task-title">{task.title}</TaskTitle>
            <TaskDate date={task.lastUpdated}></TaskDate>
            <TaskContent data-cy="task-content">{task.content}</TaskContent>
          </TaskContainer>
        )}
      </Draggable>
    );
  }
}
