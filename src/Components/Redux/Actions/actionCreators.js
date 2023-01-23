import axios from "axios";
import actions from "./actions";

const incBall = (inputBall) => {
  return { type: actions.INC_BALL, payload: inputBall };
};

const decBall = (inputBall) => {
  return { type: actions.DEC_BALL, payload: inputBall };
};

const incBat = () => {
  return { type: actions.INC_BAT };
};

const decBat = () => {
  return { type: actions.DEC_BAT };
};

const fetchReq = () => {
  return {
    type: actions.FETCH_REQ,
  };
};

const fetchSuc = (users) => {
  return {
    type: actions.FETCH_SUC,
    payload: users,
  };
};

const fetchFail = (err) => {
  return {
    type: actions.FETCH_FAIL,
    payload: err.message,
  };
};

const fetchUsers = () => {
  // ! thunk middleware
  return async (dispatch) => {
    try {
      dispatch(fetchReq());
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch(fetchSuc([...response.data]));
    } catch (err) {
      dispatch(fetchFail(err));
    }
  };
};

const actionsCreators = { incBall, decBall, incBat, decBat, fetchUsers };

export default actionsCreators;
