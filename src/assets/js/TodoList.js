import React from 'react';

export default class TodoList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      todoList: props.todos
    };
    this.changeCheck = this.changeCheck.bind(this);
  }

  changeCheck(e) {
    this.props.changeCheck(e.target);
  }


  render() {
    const items = this.state.todoList.map((todo, idx) => {
      return (
        <li key={idx} className={todo.isChecked ? '-done': ''}>
        <label htmlFor={'todo' + idx}><input type="checkbox" id={'todo' + idx} name={idx} checked={todo.isChecked} onChange={this.changeCheck} />{todo.text}</label></li>
      )
    });
    return (
      <ul>
        {items}
      </ul>
    )
  }
}