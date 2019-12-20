import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { HeadChild1Component } from './head-child1/head-child1.component';
import { HeadChild2Component } from './head-child2/head-child2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    HeadChild1Component,
    HeadChild2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
