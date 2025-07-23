import { INCREMENT, DECREMENT } from './Action';

const initialState = {
  count: 0,
  incrCount: 0,
  decreCount: 0
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        incrCount: state.incrCount + 1
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count + 1,
        decreCount: state.decreCount - 1
      };
    default:
      return state;
  }
};
