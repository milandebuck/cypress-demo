import { Column } from './column';
import { DragDropContext } from 'react-beautiful-dnd';
import React from 'react';
import { Status } from '@cypress-demo/api-interfaces';
import data from './data';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

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
    const { columns } = this.state;
    let newColumnState = {
      ...columns
    };

    //remove from source
    const sourceColumn = columns[source.droppableId];
    const newSource = Array.from(sourceColumn.items);
    newSource.splice(source.index, 1);
    if (source.droppableId === destination.droppableId) {
      //place item in state
      newSource.splice(destination.index, 0, draggableId);
      const reOrderedColumn = {
        ...sourceColumn,
        items: newSource
      };

      //set new state
      newColumnState = {
        ...columns,
        [Status[sourceColumn.columnId]]: reOrderedColumn
      };
    } else {
      const destColumn = columns[destination.droppableId];
      const newDest = Array.from(destColumn.items);

      newDest.splice(destination.index, 0, draggableId);

      const reOrderedDest = {
        ...destColumn,
        items: newDest
      };

      const reOrderedSource = {
        ...sourceColumn,
        items: newSource
      };

      newColumnState = {
        ...columns,
        [Status[sourceColumn.columnId]]: reOrderedSource,
        [Status[destColumn.columnId]]: reOrderedDest
      };
    }

    this.setState({
      ...this.state,
      columns: {
        ...newColumnState
      }
    });
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Container>
          {this.state.columnOrder.map((status: Status) => {
            const column = this.state.columns[Status[status]];
            const taskList = column.items.map(
              item => this.state.taskList[item]
            );
            return (
              <Column
                key={status}
                columnStatus={status}
                title={Status[status]}
                tasks={taskList}
              ></Column>
            );
          })}
        </Container>
      </DragDropContext>
    );
  }
}

export default App;
