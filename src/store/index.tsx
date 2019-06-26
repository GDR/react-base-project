import React, { FunctionComponent, ReactElement } from "react";
import ReduxThunk from "redux-thunk";
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store,
} from "redux";
import { Provider } from "react-redux";
import testReducer, { TestStoreTypes } from "./reducers/test-reducer";

export interface RootStoreTypes {
  test: TestStoreTypes;
}

const rootReducer = combineReducers({
  test: testReducer,
});

function configureStore(): Store<RootStoreTypes> {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middlewares = [ReduxThunk];

  const enhancers = composeEnhancers(applyMiddleware(...middlewares));

  return createStore(rootReducer, undefined, enhancers);
}

const withRedux: (Children: React.ElementType) => FunctionComponent = (
  Children: React.ElementType
): FunctionComponent => {
  return (props): ReactElement => {
    return (
      <Provider store={configureStore()}>
        <Children {...props} />
      </Provider>
    );
  };
};

export default withRedux;
