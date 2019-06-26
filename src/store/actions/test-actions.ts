import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootStoreTypes } from "~/store";

const INCREMENT = "@@test/increment";
const DECREMENT = "@@test/decrement";

export const TestActions = {
  INCREMENT,
  DECREMENT,
};

interface IncrementAction extends Action<string> {}

function increment(): IncrementAction {
  return {
    type: INCREMENT,
  };
}

interface DecrementAction extends Action<string> {}

function decrement(): DecrementAction {
  return {
    type: DECREMENT,
  };
}

interface AsyncIncrementAction extends Action<string> {}

function asyncIncrement(): ThunkAction<
  Promise<void>,
  RootStoreTypes,
  null,
  AsyncIncrementAction
> {
  return async dispatch => {
    dispatch(increment());
  };
}

export type TestActionTypes = IncrementAction | DecrementAction;

export const TestActionCreators = {
  increment,
  decrement,
  asyncIncrement,
};
