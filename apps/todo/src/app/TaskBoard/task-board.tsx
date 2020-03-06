import { Status } from '@cypress-demo/api-interfaces';
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { AddTask } from './add-task';
import { Column } from './column';
import { handleOnDragEnd } from './drag';
import { BoardState } from './models/board-state';
import data from './models/data';

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

class TaskBoard extends React.Component<{}, BoardState> {
  state = data;

  onDragEnd = result => {
    const newState = handleOnDragEnd(this.state, result);
    this.setState({
      ...newState
    });
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Container>
          {this.state.columnOrder.map((status: Status, index: number) => {
            const column = this.state.columns[status];
            const taskList = column.items.map(
              item => this.state.taskList[item]
            );
            return (
              <Column
                key={index}
                columnStatus={status}
                title={status}
                tasks={taskList}
              >
                {status === Status.New && <AddTask></AddTask>}
              </Column>
            );
          })}
        </Container>
      </DragDropContext>
    );
  }
}

export default TaskBoard;
