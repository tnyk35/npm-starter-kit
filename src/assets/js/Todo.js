import React from 'react';
import Form from './Form';
import TodoList from './TodoList';

export default class Todo extends React.Component {
  constructor(props) {
    console.log(props);
    super();
    this.state = {
      todos: props.todos
    };
    this.updateTodo = this.updateTodo.bind(this);
  }

  // リスト更新
  updateTodo(text) {
    var
      todos = this.state.todos,
      todo = {
        text: text,
        isChecked: false
      };
    todos.push(todo);
    this.setState({todos: todos});
    console.log(this.state.todos);
  }

  render() {
    return (
      <div>
        <Form updateTodo={this.updateTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}