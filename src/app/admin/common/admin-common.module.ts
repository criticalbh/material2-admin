import {NgModule} from '@angular/core';
import {ComponentsModule} from "./components/components.module";

@NgModule({
  imports: [
    ComponentsModule,
  ],
  declarations: [],
  exports: [
    ComponentsModule,
  ]
})
export class AdminCommonModule {
}
