import { Status, Task } from '@cypress-demo/api-interfaces';
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { todoClient } from '../clients/todoClient';
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

  componentDidMount() {
    const { columns } = this.state;
    const newColumns = { ...columns };
    todoClient.getAll().then(taskList => {
      for (const taskId in taskList) {
        const task = taskList[taskId];
        newColumns[task.status].items.push(taskId);
      }
      this.setState({
        ...this.state,
        columns: newColumns,
        taskList
      });
    });
  }

  onChangeHandler = (task: Task) => {
    const { columns, taskList } = this.state;
    const newColumns = {
      ...columns
    };

    newColumns[task.status].items.push(task._id);
    const newTaskList = Object.assign(
      {},
      {
        [task._id]: task
      },
      taskList
    );

    this.setState({
      ...this.state,
      columns: newColumns,
      taskList: newTaskList
    });
  };

  onDragEnd = result => {
    handleOnDragEnd(this.state, result).then(newState => {
      this.setState({
        ...newState
      });
    });
  };

  render() {
    console.log(this.props);
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Container className="task-board" data-cy="task-board">
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
                {status === Status.New && (
                  <AddTask onChange={this.onChangeHandler}></AddTask>
                )}
              </Column>
            );
          })}
        </Container>
      </DragDropContext>
    );
  }
}

export default TaskBoard;
