import { Status, Task } from '@cypress-demo/api-interfaces';
import React, { FormEvent } from 'react';
import styled from 'styled-components';
import { todoClient } from './../clients/todoClient';

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
  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const { title, content } = this.state;
    event.preventDefault();
    todoClient
      .add({
        title,
        content,
        status: Status.New,
        lastUpdated: new Date()
      })
      .then((res: Task) => {
        const { onChange } = this.props;
        if (onChange) {
          onChange(res);
        }

        this.setState({
          title: '',
          content: ''
        });
      });
  };

  handleChange = ({ target }) => {
    this.setState({
      ...this.state,
      [target.name]: target.value
    });
  };
  render() {
    return (
      <TaskContainer data-cy="add-task">
        New Task
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="title"
            data-cy="title-input"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="content"
            placeholder="content"
            data-cy="content-input"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <Submit data-cy="submit-button">Add</Submit>
        </form>
      </TaskContainer>
    );
  }
}
