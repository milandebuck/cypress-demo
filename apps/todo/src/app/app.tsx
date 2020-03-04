import { Status } from '@cypress-demo/api-interfaces';
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Column } from './column';
import data from './data';

class App extends React.Component {
  state = data;
  onDragEnd = ({ destination, source, draggableId }) => {
    if (
      !destination ||
      (destination.index === source.index &&
        destination.droppableId === source.droppableId)
    ) {
      return;
    }

    const column = this.state.columns[source.droppableId];
    const newOrder = Array.from(column.items);
    newOrder.splice(source.index, 1);
    newOrder.splice(destination.index, 0, draggableId);
    const reOrderedColumn = {
      ...column,
      items: newOrder
    };

    this.setState({
      ...this.state,
      columns: {
        ...this.state.columns,
        [Status[column.columnId]]: reOrderedColumn
      }
    });
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map((status: Status) => {
          const column = this.state.columns[Status[status]];
          const taskList = column.items.map(item => this.state.taskList[item]);
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
