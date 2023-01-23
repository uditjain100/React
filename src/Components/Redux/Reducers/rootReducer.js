import BallReducer from "./BallReducer";
import BatReducer from "./BatReducer";
import UserReducer from "./UserReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  bat: BatReducer,
  ball: BallReducer,
  user: UserReducer,
});

export default rootReducer;
