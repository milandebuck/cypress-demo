import { Task } from '@cypress-demo/api-interfaces';
import React from 'react';
import styled from 'styled-components';

export const TaskContainer = styled.div`
  margin-bottom: 8px;
  padding: 8px;
  border: 1px solid lightGrey;
  border-radius: 2px;
`;

export const Submit = styled.button`
  background-color: green;
  color: white;
  border: none;
  padding: 8px;
`;

export class AddTask extends React.Component<
  { onChange?: (task: Task) => void },
  {
    title: string;
    content: string;
  }
> {
  state = {
    title: '',
    content: ''
  };
  handleSubmit = (event: Event) => {
    //TODO
    console.log('submit');
    event.preventDefault();
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
        New Task
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="content"
            placeholder="content"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <Submit>Add</Submit>
        </form>
      </TaskContainer>
    );
  }
}
