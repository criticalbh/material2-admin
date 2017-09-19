import {createSelector} from 'reselect';
import {AppState} from "../reducers/app.state";
import * as fromDummy from "../reducers/dummy.reducer";

export const getDummyState = (state: AppState) => state.dummy;

export const getDummies = createSelector(getDummyState, fromDummy.getDummies);
export const getDummiesLoading = createSelector(getDummyState, fromDummy.getDummiesLoading);
