import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SelectivePreloadingStrategy} from './selective-preloading-strategy';
import {NgModule} from '@angular/core';
import {PageNotFoundComponent} from './not-found.component';
import {ButtonsComponent} from './buttons/buttons.component';
import {GalleryComponent} from './gallery/gallery.component';
const appRoutes: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
    // outlet: 'popup'
  },
  {
    path: 'buttons',
    component: ButtonsComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
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
