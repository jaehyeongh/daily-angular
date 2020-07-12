import * as angular from 'angular';
declare function require(x: string): any;

export function fizzBuzz(num: number): string | number  {
  return num;
}

class FizzBuzzComponent implements angular.IComponentOptions {
  restrict = 'E';
  controller = FizzBuzzController;
  controllerAs = 'ctrl';
  template = require('./fizz-buzz-component.html')
}

class FizzBuzzController implements angular.IController {
  hello: string = "hello";
  array: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  $onInit(): void {

  }
}

function init () {
  angular
    .module('myApp')
    .component('fizzBuzz',  new FizzBuzzComponent());
}

export {init as default};
