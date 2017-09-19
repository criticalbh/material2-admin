import {DummyModel} from "../models/dummy.model";
import * as dummyActions from '../actions/dummy.action';

export interface State {
  selectedDummy: DummyModel;
  dummies: DummyModel[];
  loading: boolean;
}

export const initialState: State = {
  selectedDummy: undefined,
  dummies: undefined,
  loading: undefined,
};

export function reducer(state = initialState, action: dummyActions.Actions): State {
  switch (action.type) {
    case dummyActions.LOAD_DUMMY_FAIL:
    case dummyActions.LOAD_DUMMY: {
      return {
        ...state,
        loading: true,
      };
    }
    case dummyActions.LOAD_DUMMY_SUCCESS: {
      return {
        ...state,
        dummies: action.payload,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
}

export const getDummies = (state: State) => state.dummies;
export const getDummiesLoading = (state: State) => state.loading;
