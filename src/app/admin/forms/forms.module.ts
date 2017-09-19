import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsContainerComponent} from './forms-container/forms-container.component';
import {RouterModule} from "@angular/router";
import {DummyEffects} from "../../effects/dummy.effects";
import {EffectsModule} from "@ngrx/effects";
import {DummyService} from "../../services/dummy.service";
import { FormsExampleComponent } from './forms-example/forms-example.component';
import {MdProgressSpinnerModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: FormsContainerComponent,
    }]),
    EffectsModule.run(DummyEffects),
    MdProgressSpinnerModule,
  ],
  providers: [
    DummyService,
  ],
  declarations: [
    FormsContainerComponent,
    FormsExampleComponent,
  ],
})
export class FormsModule {
}
