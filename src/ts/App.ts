/// <reference path="../../typings/index.d.ts" />

import Test = require('./Test');

class App {
  constructor() {
    let test:Test = new Test();
    test.alert();
  }
}

window.addEventListener("load", () => {
  new App();
});