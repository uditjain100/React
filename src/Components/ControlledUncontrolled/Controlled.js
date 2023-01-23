import React, { useEffect, useState } from "react";

function Controlled() {
  const [taskName, setTaskName] = useState("");

  //   const [count, setCount] = useState(0);

  useEffect(() => {
    // ! any dynamic validations on input field i.e, taskName
    // setCount(count + 1);
  }, []);

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
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>

        <h1>Count : {}</h1>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </React.Fragment>
  );
}

export default Controlled;
