import { Status, Task } from '@cypress-demo/api-interfaces';
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Column } from './column';
import { columnOrder, taskList } from './data';

class App extends React.Component<
  {},
  {
    columnOrder: Status[];
    taskList: Task[];
  }
> {
  constructor(props) {
    super(props);
    this.state = {
      columnOrder,
      taskList: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(state => ({
        columnOrder: state.columnOrder,
        taskList
      }));
    }, 1000);
  }
  onDragEnd = result => {
    //todo
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map((status: Status) => {
          const taskList = this.state.taskList.filter(
            task => task.status === status
          );

          return (
            <Column
              key={status}
              title={Status[status]}
              tasks={taskList}
            ></Column>
          );
        })}
      </DragDropContext>
    );
  }
}

export default App;
