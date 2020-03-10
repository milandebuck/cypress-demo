import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/TaskBoard/task-board';

//demonstrate retry behavior cypress
// setTimeout(() => {
//   ReactDOM.render(<App />, document.getElementById('root'));
// }, 3000);

ReactDOM.render(<App />, document.getElementById('root'));
