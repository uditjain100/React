import actions from "../Actions/actions";

const initialState = {
  balls: 50,
};

const BallReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INC_BALL:
      return { ...state, balls: state.balls + Number(action.payload) };
    case actions.DEC_BALL:
      return { ...state, balls: state.balls - Number(action.payload) };
    default:
      return state;
  }
};

export default BallReducer;
