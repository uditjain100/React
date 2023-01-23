const initialState = {
  counter: 0,
  text: "Hey",
};

const ACTIONS = {
  INC: "INC",
  DEC: "DEC",
};

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.INC:
      return { ...state, counter: state.counter + 1 };
    case ACTIONS.DEC:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

const actionsCreators = {
  incBat: () => {
    return { type: ACTIONS.INC };
  },
  decBat: () => {
    return { type: ACTIONS.DEC };
  },
};

const reduxHelpers = { reducers, initialState, ACTIONS, actionsCreators };

export default reduxHelpers;
