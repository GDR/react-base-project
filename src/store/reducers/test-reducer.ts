import { TestActions, TestActionTypes } from "~/store/actions/test-actions";

export interface TestStoreTypes {
  value: number;
}

const initialState: TestStoreTypes = {
  value: 0,
};

export default function testReducer(
  state: TestStoreTypes = initialState,
  action: TestActionTypes
): TestStoreTypes {
  switch (action.type) {
    case TestActions.INCREMENT:
      return {
        value: state.value + 1,
      };
    case TestActions.DECREMENT:
      return {
        value: state.value - 1,
      };
    default:
      return state;
  }
}
