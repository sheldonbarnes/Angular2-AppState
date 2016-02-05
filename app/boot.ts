import {bootstrap}    from 'angular2/platform/browser';

import {AppComponent} from './app.component';
import { RouterLink,ROUTER_BINDINGS } from 'angular2/router';
import {enableProdMode} from 'angular2/core';

import {Http, HTTP_BINDINGS} from 'angular2/http';

//hello worldsdsd
//bootstrap(AppComponent, [HTTP_BINDINGS]);
enableProdMode();
bootstrap(AppComponent);
