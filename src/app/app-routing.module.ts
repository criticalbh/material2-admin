import {RouterModule, Routes} from '@angular/router';
import {SelectivePreloadingStrategy} from './selective-preloading-strategy';
import {NgModule} from '@angular/core';
import {PageNotFoundComponent} from './not-found.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/admin/admin.module#AdminModule',
  },
  {
    path: 'login',
    loadChildren: 'app/auth/auth.module#AuthModule',
  },
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {preloadingStrategy: SelectivePreloadingStrategy}
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule {
}
