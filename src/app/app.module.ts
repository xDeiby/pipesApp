import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { AppComponent } from './app.component';

import { SalesModule } from './sales/sales.module';
import { SharedModule } from './shared/shared.module';
import localeEs from "@angular/common/locales/es-CL";
import localeRus from "@angular/common/locales/ru-KG";
import {registerLocaleData} from "@angular/common";

registerLocaleData(localeEs);
registerLocaleData(localeRus);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRouterModule, SharedModule, SalesModule],
  providers: [
    {provide: LOCALE_ID, useValue: "es-CL"}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
