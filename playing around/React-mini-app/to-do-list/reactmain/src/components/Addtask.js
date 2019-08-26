
import React, { Component } from "react";

export class Addtask extends Component {
  addTask = e => {
    e.preventDefault();

    var newTodo = this.inputField.value;
    if (newTodo) this.props.addTask(newTodo);

    this.inputField.value = '';
  };

  render() {
    return (
      <form className="form-group form-inline d-flex justify-content-center">
        <input
          className="form-control"
          type="text"
          placeholder="Add new task"
          ref={e => (this.inputField = e)}
        />

        <input
          className="btn btn-info"
          type="submit"
          value="+"
          onClick={this.addTask}
        />
      </form>
    );
  }
}

export default Addtask;