import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './cars/car/car.component';
import { AddComponent } from './cars/add/add.component';
import { LifeComponent } from './life/life.component';

import { SimpleAttrDirective } from './directives/simple-attr.directive';
import { SimpleAttr2Directive } from './directives/simple-attr-2.directive';
import { SimpleAttr3Directive } from './directives/simple-attr-3.directive';
import { SimpleStr1Directive } from './directives/simple-str-1.directive';
import { CarouselDirective } from './directives/carousel.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarsComponent,
    CarComponent,
    AddComponent,
    LifeComponent,
    SimpleAttrDirective,
    SimpleAttr2Directive,
    SimpleAttr3Directive,
    SimpleStr1Directive,
    CarouselDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
