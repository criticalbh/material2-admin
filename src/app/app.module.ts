import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import 'hammerjs';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from "./not-found.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterStoreModule} from "@ngrx/router-store";
import {reducer} from "./reducers/index";
import {StoreModule} from "@ngrx/store";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    FlexLayoutModule,
    RouterStoreModule.connectRouter(),
    StoreModule.provideStore(reducer),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
