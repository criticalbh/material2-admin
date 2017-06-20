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
  MdListModule, MdCardModule, MdGridListModule, MdDialogModule
} from '@angular/material';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './not-found.component';
import {ButtonsComponent} from './buttons/buttons.component';
import {ChartsModule} from 'ng2-charts';
import { GalleryComponent } from './gallery/gallery.component';
import {NgGalleryModule} from './ng-gallery/ng-gallery.module';
import {NgDialogModule} from './ng-dialog/ng-dialog.module';
import { DialogComponent } from './dialog/dialog.component';
import { DialogBoxComponent } from './dialog/dialog-box/dialog-box.component';
import { StandardDialogComponent } from './dialog/standard-dialog/standard-dialog.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    ButtonsComponent,
    GalleryComponent,
    DialogComponent,
    DialogBoxComponent,
    StandardDialogComponent
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
    MdDialogModule,
    MdGridListModule,
    NgGalleryModule,
    NgDialogModule,
    FlexLayoutModule
  ],
  entryComponents: [DialogBoxComponent, StandardDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
