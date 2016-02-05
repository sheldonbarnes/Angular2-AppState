import {Component, View, OpaqueToken, provide} from 'angular2/core';
import { RouterLink, ROUTER_DIRECTIVES,RouteConfig } from 'angular2/router';


import {Subject} from 'rxjs/Subject';


class AddTodoAction {
  constructor (public todoId: number, public text: string) {

  }
}

class ToggleTodoAction {
  constructor (public id: number) {

  }
}

class SetVisibilityFilter {
  constructor (public filter: string) {

  }
}


type Action = AddTodoAction|ToggleTodoAction|SetVisibilityFilter;

const initState = new OpaqueToken("initState");
const dispatcher = new OpaqueToken("dispatcher");
const state = new OpaqueToken("state");

const stateAndDispatcher = [

  provide(initState, {useValue: {todos: [], visibilityFilter:'SHOW_ALL'}}),
  provide(dispatcher, {useValue: new Subject<Action>(null)})
  //provide(state, {useFactory: stateFn, deps: [new Inject(initState), new Inject(dispatcher)]})

];

@Component({
    selector: 'my-app',
})

@View({
    templateUrl: 'main.html'
})



export class AppComponent {
  constructor(){
  }
}
