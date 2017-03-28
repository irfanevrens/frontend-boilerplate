import angular from 'angular';

import {ExampleService} from './services/service.example.js';
import {ExampleController as denemeController} from './controllers/controller.example.js';
import './styles/main.scss';

let app = angular.module('myApp',[]);
app.controller('deneme',denemeController);

let result = ExampleService(app);

console.log(result);
