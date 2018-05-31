import React from 'react';
import Form from './Form';
import TodoList from './TodoList';
import Delete from './Delete';

export default class Todo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      todoList: props.todos
    }
    this.addList = this.addList.bind(this);
    this.changeListCheck = this.changeListCheck.bind(this);
    this.removeList = this.removeList.bind(this);
  }

  addList(text) {
    var
      todoList = this.state.todoList,
      todo = {text: text, isChecked: false};
    todoList.push(todo);
    this.setState({todoList: todoList});
  }

  changeListCheck(target) {
    var
      todoList = this.state.todoList,
      index = target.name,
      checked = target.checked;
    
    todoList.map((todo, idx) => {
    if (index === idx + '') {
      todoList[idx].isChecked = checked;
    }
    });

    this.setState({todoList: todoList});
  }

  removeList() {
    var todoList = this.state.todoList;

    for (var i = 0; i < todoList.length;) {
      if (todoList[i].isChecked) {
        todoList.splice(i, 1);
      } else {
        i++;
      }
    }
    this.setState({todoList: todoList});
  }

  render() {
    return (
      <div>
        <Delete removeList={this.removeList} />
        <Form addList={this.addList} />
        <TodoList todos={this.state.todoList} changeCheck={this.changeListCheck} />
      </div>
    )
  }
}