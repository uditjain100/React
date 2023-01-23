import React, { Component } from "react";
import { v4 as uuid } from "uuid";

export default class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      taskName: "",
      taskDescription: "",
      tasks: [],
    };
  }

  updateValue = (e) => {
    this.setState({ ...this.state, taskName: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Task Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              value={this.state.taskName}
              onChange={(e) => this.updateValue(e)}
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
              value={this.state.taskDescription}
              onChange={(e) =>
                this.setState({
                  ...this.state,
                  taskDescription: e.target.value,
                })
              }
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) =>
              this.setState({
                ...this.state,
                tasks: [
                  ...this.state.tasks,
                  {
                    id: uuid(),
                    name: this.state.taskName,
                    desc: this.state.taskDescription,
                  },
                ],
              })
            }
          >
            Submit
          </button>
        </div>

        <ul className="list-group">
          {this.state.tasks.map(
            function (task) {
              return (
                <div className="row" key={task.id}>
                  <li className="col-2">{task.id}</li>
                  <li className="col-4">{task.name}</li>
                  <li className="col-4">{task.desc}</li>
                  <button
                    className="btn btn-danger col-2"
                    onClick={() =>
                      this.setState({
                        ...this.state,
                        tasks: this.state.tasks.filter((t) => task.id !== t.id),
                      })
                    }
                  >
                    Delete
                  </button>
                </div>
              );
            }.bind(this)
          )}
          <li className="list-group-item"></li>
        </ul>
      </React.Fragment>
    );
  }
}
