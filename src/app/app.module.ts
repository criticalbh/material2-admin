import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import 'hammerjs';
import {AppComponent} from './app.component';
import {
  MdButtonModule,
  MdSidenavModule,
  MdToolbarModule,
  MdMenuModule,
  MdIconModule,
  MdListModule, MdCardModule, MdGridListModule
} from '@angular/material';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './not-found.component';
import {ButtonsComponent} from './buttons/buttons.component';
import {ChartsModule} from 'ng2-charts';
import { GalleryComponent } from './gallery/gallery.component';
import {NgGalleryModule} from './ng-gallery/ng-gallery.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    ButtonsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    MdButtonModule,
    MdSidenavModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    MdListModule,
    MdCardModule,
    MdGridListModule,
    NgGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
