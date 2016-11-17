import { Component } from '@angular/core';
import {InjectUser} from "angular2-meteor-accounts-ui";
import template from './app.component.html';


@Component({
  selector: 'app',
  template
})
@InjectUser('user')
export class AppComponent {
     constructor() {
         console.log("inside app component");

  }

  logout() {
    Meteor.logout();
  }
}
