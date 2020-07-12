import * as angular from 'angular';
declare function require(x: string): any;

class OnClickComponent implements angular.IComponentOptions {
    restrict = 'E';
    controller = OnClickController;
    controllerAs = 'ctrl';
    template = require('./on-click-component.html')
}

class OnClickController implements angular.IController {
    num: number = 1;

    public onClick() {
        // ??
    }
}

function init () {
    angular
        .module('myApp')
        .component('onClick',  new OnClickComponent());
}

export {init as default};
