System.register(['angular2/core', 'rxjs/Subject'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Subject_1;
    var AddTodoAction, ToggleTodoAction, SetVisibilityFilter, initState, dispatcher, state, stateAndDispatcher, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            AddTodoAction = (function () {
                function AddTodoAction(todoId, text) {
                    this.todoId = todoId;
                    this.text = text;
                }
                return AddTodoAction;
            })();
            ToggleTodoAction = (function () {
                function ToggleTodoAction(id) {
                    this.id = id;
                }
                return ToggleTodoAction;
            })();
            SetVisibilityFilter = (function () {
                function SetVisibilityFilter(filter) {
                    this.filter = filter;
                }
                return SetVisibilityFilter;
            })();
            initState = new core_1.OpaqueToken("initState");
            dispatcher = new core_1.OpaqueToken("dispatcher");
            state = new core_1.OpaqueToken("state");
            stateAndDispatcher = [
                core_1.provide(initState, { useValue: { todos: [], visibilityFilter: 'SHOW_ALL' } }),
                core_1.provide(dispatcher, { useValue: new Subject_1.Subject(null) })
            ];
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                    }),
                    core_1.View({
                        templateUrl: 'main.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map