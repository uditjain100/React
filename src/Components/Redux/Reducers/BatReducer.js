import actions from "../Actions/actions";

const initialState = {
  bats: 30,
};

const BatReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INC_BAT:
      return { ...state, bats: state.bats + 1 };
    case actions.DEC_BAT:
      return { ...state, bats: state.bats - 1 };
    default:
      return state;
  }
};

export default BatReducer;
