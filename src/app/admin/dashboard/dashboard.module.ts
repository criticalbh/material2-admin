import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardContainerComponent} from './dashboard-container/dashboard-container.component';
import {RouterModule} from "@angular/router";
import {GraphComponent} from './graph/graph.component';
import {ChartsModule} from "ng2-charts";
import {MdCardModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: DashboardContainerComponent,
    }]),
    ChartsModule,
    MdCardModule,
    FlexLayoutModule,
  ],
  declarations: [
    DashboardContainerComponent,
    GraphComponent,
  ]
})
export class DashboardModule {
}
