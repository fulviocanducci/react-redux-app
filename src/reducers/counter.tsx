import { actionCounter } from "../actions";

const initialState = {
  value: 0
};
export const counterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionCounter.INCREMENT:
      return {
        value: state.value + 1
      };
    case actionCounter.DECREMENT:
      return {
        value: state.value - 1
      };
    case actionCounter.SETVALUE:
      return {
        value: +action.value
      };
    default:
      return state;
  }
};
