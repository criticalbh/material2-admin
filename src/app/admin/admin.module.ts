import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {
  MdButtonModule, MdIconModule, MdList, MdListModule, MdMenuModule, MdSidenavModule,
  MdToolbarModule
} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AdminCommonModule} from "./common/admin-common.module";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminCommonModule,
    FlexLayoutModule,
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdListModule,
  ],
  declarations: [
    MainComponent,
  ]
})
export class AdminModule {
}
