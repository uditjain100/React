import actions from "../Actions/actions";

const initialState = {
  loading: false,
  err: "",
  users: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_REQ:
      return { ...state, loading: true };
    case actions.FETCH_SUC:
      return { ...state, loading: false, users: [...action.payload] };
    case actions.FETCH_FAIL:
      return { ...state, loading: false, err: action.payload };
    default:
      return state;
  }
};

export default UserReducer;
