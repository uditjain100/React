import React, { useState } from "react";

function Todo() {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState([]);

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
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Task Description
          </label>
          <textarea
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) =>
            setTasks([...tasks, { name: taskName, desc: taskDescription }])
          }
        >
          Submit
        </button>
      </div>

      <ul className="list-group">
        {tasks.map((task) => {
          return (
            <div className="row">
              <li className="col-6">{task.name}</li>
              <li className="col-6">{task.desc}</li>
            </div>
          );
        })}
        <li className="list-group-item"></li>
      </ul>
    </React.Fragment>
  );
}

export default Todo;
