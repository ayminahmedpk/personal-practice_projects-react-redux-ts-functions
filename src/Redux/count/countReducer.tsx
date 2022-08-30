


import { Reducer } from "redux";
import { GlobalActions } from "../globalActions";
import { CountActions } from "./countActions";

// random value for testing

export type CountStateType = {count: number;}

const initialState = { count: 0 }

export const countReducer:Reducer<CountStateType, CountActions | GlobalActions> =
(state = initialState, action) => {

  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1};
    
    case 'DECREMENT':
      return {count: state.count - 1};

    case 'RESET':
      return {count: 100};

    default:
      return state;
  }

}