import {Injectable} from "@angular/core";
import {Actions, Effect} from '@ngrx/effects';
import {Action} from '@ngrx/store';

import {Observable} from "rxjs/Observable";
import * as dummyActions from "../actions/dummy.action";
import {DummyService} from "../services/dummy.service";


@Injectable()
export class DummyEffects {

  @Effect()
  loadDummies$: Observable<Action> = this.actions$
    .ofType(dummyActions.LOAD_DUMMY)
    .flatMap(() => this.dummyService
      .fetch()
      .map(succ => new dummyActions.LoadDummySuccessAction(succ))
      .catch(err => Observable.of(new dummyActions.LoadDummyFailAction(err)))
    );

  constructor(private actions$: Actions, private dummyService: DummyService) {
  }
}
