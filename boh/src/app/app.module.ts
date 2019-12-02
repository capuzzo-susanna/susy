import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppDueComponent } from './app-due/app-due.component';
import { AppTreComponent } from './app-tre/app-tre.component';
import { AppQuattroComponent } from './app-quattro/app-quattro.component';

@NgModule({
  declarations: [
    AppComponent,
    AppDueComponent,
    AppTreComponent,
    AppQuattroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
