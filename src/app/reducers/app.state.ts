import * as fromDummy from './dummy.reducer';
import * as fromUi from './ui.reducer';

export interface AppState {
  dummy: fromDummy.State;
  ui: fromUi.State;
}
