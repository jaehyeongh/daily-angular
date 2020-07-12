import * as angular from 'angular';
import 'angular-ui-router';
import fizzBuzzComponent from './fizz-buzz-component.ts';
import onClickComponent from './on-click-component.ts';

const app = angular.module('myApp', ['ui.router']);

fizzBuzzComponent();
onClickComponent();

app.config(($stateProvider: any) => {
    const onClickState = {
        name: 'onClick',
        url: '/on-click',
        template: '<on-click></on-click>'
    };
    const fizzBuzzState = {
        name: 'fizzBuzz',
        url: '/fizz-buzz',
        template: '<fizz-buzz></fizz-buzz>'
    };
    $stateProvider
        .state(onClickState)
        .state(fizzBuzzState)
});

