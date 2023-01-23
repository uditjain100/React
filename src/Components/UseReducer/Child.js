import React from "react";
import reduxHelpers from "./redux";

function Child({ dispatch }) {
  return (
    <React.Fragment>
      <button onClick={() => dispatch(reduxHelpers.actionsCreators.decBat())}>
        -
      </button>
    </React.Fragment>
  );
}

export default Child;
