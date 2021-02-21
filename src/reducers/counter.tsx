const initialState = {
  value: 0
};
export const counterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        value: state.value + 1
      };
    case "DECREMENT":
      return {
        value: state.value - 1
      };
    default:
      return state;
  }
};
