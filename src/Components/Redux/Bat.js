import React from "react";
import { connect } from "react-redux";
import actionsCreators from "./Actions/actionCreators";

function Bat(props) {
  return (
    <React.Fragment>
      <div>Bats : {props.bats.bats}</div>
      <button className="btn btn-info" onClick={props.incBat}>
        Increase
      </button>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    bats: state.bat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incBat: () => dispatch(actionsCreators.incBat()),
    decBat: () => dispatch(actionsCreators.decBat()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bat);
