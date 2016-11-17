
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountsModule } from 'angular2-meteor-accounts-ui';
//import { MaterialModule } from "@angular/material";
import { MdButtonModule } from "@angular2-material/button";
import { MdToolbarModule } from "@angular2-material/toolbar";
import { MdInputModule } from "@angular2-material/input";
import { MdCardModule } from "@angular2-material/card";
import { MdCoreModule } from "@angular2-material/core";

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { AUTH_DECLARATIONS } from "./uaa/index";

@NgModule({
  imports: [
    BrowserModule,
    AccountsModule,
    RouterModule.forRoot(routes),
    // MaterialModule.forRoot(),
     MdCoreModule.forRoot(),
    MdButtonModule.forRoot(),
    MdToolbarModule.forRoot(),
    MdInputModule.forRoot(),
    MdCardModule.forRoot()
  ],
  declarations: [
    AppComponent,
    ...AUTH_DECLARATIONS
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {

}
platformBrowserDynamic().bootstrapModule(AppModule);
console.log("inside app module");