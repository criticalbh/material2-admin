import * as fromDummy from './dummy.reducer';
import * as fromUi from './ui.reducer';

export const reducers = {
  dummy: fromDummy.reducer,
  ui: fromUi.reducer,
};
