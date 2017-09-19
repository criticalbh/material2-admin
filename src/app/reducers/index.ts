import {ActionReducer, combineReducers} from '@ngrx/store';
import {storeFreeze} from 'ngrx-store-freeze';
import {compose} from '@ngrx/core';
import {environment} from "../../environments/environment";
import {AppState} from "./app.state";
import {reducers} from "./app.reducers";


const developmentReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<AppState> = compose(combineReducers)(reducers);


export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}
