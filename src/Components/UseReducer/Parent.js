import React, { useReducer } from "react";
import Child from "./Child";
import reduxHelpers from "./redux";

function Parent() {
  const [state, dispatch] = useReducer(
    reduxHelpers.reducers,
    reduxHelpers.initialState
  );
  return (
    <React.Fragment>
      <div>Counters : {state.counter}</div>
      <div>Texts : {state.text}</div>
      <button onClick={() => dispatch(reduxHelpers.actionsCreators.incBat())}>
        +
      </button>
      <Child dispatch={dispatch}></Child>
    </React.Fragment>
  );
}

export default Parent;
