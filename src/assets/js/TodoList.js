import React from 'react';

export default class TodoList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((todo, idx) => {
          return <li key={idx}>{todo.text}</li>
        })}
      </ul>
    );
  }
}