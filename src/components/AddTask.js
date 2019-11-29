import React from "react";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
const uuidv4 = require('uuid/v4')
class AddTask extends React.Component {
  state = {
    taskDescription: ""
  }
  addTask = () => {
    const task = {
      id: uuidv4(),
      taskDescription: this.state.taskDescription,
      completed: false
    }
    this.props.newTask(task);
    this.setState({ taskDescription: "" });
  }
  taskDescriptionChanged = (event) => {
    let taskDescription = this.state.taskDescription;
    taskDescription = event.target.value;
    this.setState({ taskDescription });

  }
  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-10">
          <input
            className="form-control navbar"
            type="text"
            id="addTask"
            placeholder="Things to do..."
            value={this.state.taskDescription}
            onChange={this.taskDescriptionChanged}
          />
        </div>
        <div className="button col-12 col-md-2">
          <button type="button" className="btn btn-warning btn btn-md " onType onClick={this.addTask}><FontAwesomeIcon icon={faPlusSquare}/>
         </button>
        </div>
      </div>
    );
  }
}
export default AddTask;