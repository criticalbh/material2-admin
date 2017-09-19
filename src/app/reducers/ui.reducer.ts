import * as uiActions from '../actions/ui.action';

export interface State {
  sidebarOpen: boolean;
}

export const initialState: State = {
  sidebarOpen: true,
};

export function reducer(state = initialState, action: uiActions.Actions): State {
  switch (action.type) {
    case uiActions.TOGGLE_SIDEBAR: {
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen,
      };
    }
    default: {
      return state;
    }
  }
}

export const getSidebarOpen = (state: State) => state.sidebarOpen;
