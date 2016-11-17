import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { LoginComponent } from './uaa/login.component';
import {SignupComponent} from "./uaa/signup.component";
import {RecoverComponent} from "./uaa/recover.component";

console.log("inside router");
export const routes = [
 // { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'recover', component: RecoverComponent }
];