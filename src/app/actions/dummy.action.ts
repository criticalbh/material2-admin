import {Action} from '@ngrx/store';
import {DummyModel} from "../models/dummy.model";

export const LOAD_DUMMY = 'LOAD_DUMMY';
export const LOAD_DUMMY_SUCCESS = 'LOAD_DUMMY_SUCCESS';
export const LOAD_DUMMY_FAIL = 'LOAD_DUMMY_FAIL';

export class LoadDummyAction implements Action {
  readonly type = LOAD_DUMMY;

  constructor(public payload?) {
  }
}

export class LoadDummySuccessAction implements Action {
  readonly type = LOAD_DUMMY_SUCCESS;

  constructor(public payload: DummyModel[]) {
  }
}

export class LoadDummyFailAction implements Action {
  readonly type = LOAD_DUMMY_FAIL;

  constructor(public payload?) {
  }
}

export type Actions =
  LoadDummyAction
  | LoadDummySuccessAction
  | LoadDummyFailAction
  ;
