import React from 'react';

export default class Form extends React.Component {
  constructor() {
    super();
    this.addText = this.addText.bind(this);
  }

  addText(e) {
    e.preventDefault();
    var input = e.target.querySelector('input');
    this.props.updateTodo(input.value); // ここでpropして更新用の関数を実行する
    input.value = '';
  }

  render() {
    return (
      <form onSubmit={this.addText}>
        <input type="text" placeholder="What to do" />
      </form>
    );
  }
}