import React, { useRef, useState } from "react";

function Uncontrolled() {
  //   const [taskName, setTaskName] = useState("");
  //   const inputEle = React.createRef();
  const inputEle = useRef();

  const handleClick = () => {
    // ! no dynamic validations
    console.log(inputEle.current.value);
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
            Task Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail"
            ref={inputEle}
            // value={taskName}
            // onChange={(e) => setTaskName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </div>
    </React.Fragment>
  );
}

export default Uncontrolled;
