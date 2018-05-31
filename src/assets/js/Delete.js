import React from 'react';

export default class Delete extends React.Component {
  constructor() {
    super();
    this.remove = this.remove.bind(this);
  }

  remove(e) {
    e.preventDefault();
    this.props.removeList();
  }

  render() {
    return (
      <form onSubmit={this.remove}>
        <input type="submit" value="完了タスクを削除" />
      </form>
    )
  }
}