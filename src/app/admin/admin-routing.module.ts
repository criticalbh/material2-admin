import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";


const routes: Routes = [
  {path: '', redirectTo: 'app', pathMatch: 'full'},
  {
    path: 'app', component: MainComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', loadChildren: 'app/admin/dashboard/dashboard.module#DashboardModule'},
      {path: 'forms', loadChildren: 'app/admin/forms/forms.module#FormsModule'},
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  declarations: [],
  exports: [
    RouterModule,
  ],
})
export class AdminRoutingModule {
}
