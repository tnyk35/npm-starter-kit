import React from 'react';

export default class Form extends React.Component {
  constructor() {
    super();
    this.addTask = this.addTask.bind(this);
  }

  addTask(e) {
    e.preventDefault();
    var input = e.target.querySelector('input');
    this.props.addList(input.value);
    input.value = '';
  }

  render() {
    return (
      <form onSubmit={this.addTask}>
        <input type="text" />
      </form>
    )
  }
}