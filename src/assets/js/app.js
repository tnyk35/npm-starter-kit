import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

const todos = [
  {text: "テストです", isChecked: false},
  {text: "テスト2です", isChecked: true}
];

ReactDOM.render(<Todo todos={todos} />, document.getElementById('app'));