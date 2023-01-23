import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import actionsCreators from "./Actions/actionCreators";

function Ball(props) {
  const [inputBall, setInputBall] = useState(1);

  const balls = useSelector((state) => state.ball.balls);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div>Balls : {balls}</div>
      <input value={inputBall} onChange={(e) => setInputBall(e.target.value)} />
      <button
        className="btn btn-info"
        onClick={() => dispatch(actionsCreators.incBall(inputBall))}
      >
        Increase
      </button>
      <button
        className="btn btn-info"
        onClick={() => dispatch(actionsCreators.decBall(inputBall))}
      >
        Decrease
      </button>
    </React.Fragment>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     balls: state.ball,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     incBall: (inputBall) => dispatch(actionsCreators.incBall(inputBall)),
//     decBall: (inputBall) => dispatch(actionsCreators.decBall(inputBall)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Ball);
export default Ball;
