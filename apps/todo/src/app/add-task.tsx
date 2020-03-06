import { Draggable } from 'react-beautiful-dnd';
import React from 'react';
import { Status } from '@cypress-demo/api-interfaces';
import { TaskContainer } from './task';

export class AddTask extends React.Component<
  {},
  {
    title: string;
  }
> {
  state = {
    title: ''
  };
  handleSubmit = result => {
    //TODO
  };

  handleChange = ({ target }) => {
    this.setState({
      ...this.state,
      [target.name]: target.value
    });
  };
  render() {
    return (
      <TaskContainer>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
        </form>
      </TaskContainer>
    );
  }
}
