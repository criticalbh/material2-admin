import {createSelector} from 'reselect';
import {AppState} from "../reducers/app.state";
import * as fromUi from "../reducers/ui.reducer";

export const getUiState = (state: AppState) => state.ui;

export const getSidebarOpen = createSelector(getUiState, fromUi.getSidebarOpen);
