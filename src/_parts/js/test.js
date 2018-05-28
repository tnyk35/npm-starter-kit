import $ from 'jquery';

export default class Test {
  constructor() {
    console.log('てｓとです');
  }

  doAct() {
    $(function () {
      $('h1').css({color: "#f00"});
    })
  }
}