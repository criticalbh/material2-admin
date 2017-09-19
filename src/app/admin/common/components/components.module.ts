import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {
  MdButtonModule,
  MdIconModule,
  MdListModule,
  MdMenuModule,
  MdSidenavModule,
  MdToolbarModule
} from "@angular/material";
import {SidebarComponent} from './sidebar/sidebar.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    MdButtonModule,
    MdSidenavModule,
    MdListModule,
    RouterModule,
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
  ]
})
export class ComponentsModule {
}
