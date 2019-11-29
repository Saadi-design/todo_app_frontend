import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faPenFancy } from '@fortawesome/free-solid-svg-icons';
class Task extends React.Component {

    deleteTask = () => {
        this.props.deleteTaskFunc(this.props.task.id);
    }
    completeTask = () => {
        this.props.completeTaskFunc(this.props.task.id)
    }
    editTask = () => {
        let newTaskDescription = prompt('Update task', this.props.task.taskDescription);
        this.props.editTaskFunc(this.props.task.id, newTaskDescription)
    }
    render() {
        const completed = this.props.task.completed
        return (

            <div className="row taskRow">
                {completed &&

                    <div className="col-12 col-md-6 completedTask">

                        {this.props.task.taskDescription}
                    </div>
                }
                
                {!completed &&
                    <div className="col-12 col-md-6">
                        {this.props.task.taskDescription}
                    </div>
                }
                <div className="col-4 col-md-2 col-lg-2">

                    <button type="button" className="btn btn-success btn-md" onClick={this.completeTask}>
                        <FontAwesomeIcon icon={faCheckSquare} />
                    </button>
                </div>
                <div className="col-4 col-md-2 col-lg-2">
                    <button type="button" class="btn btn-danger btn-sm-m1" onClick={this.deleteTask}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </div>
                <div className="col-4 col-md-2 col-lg-2">
                    <button type="button" className="btn btn-primary btn-sm-m1" onClick={this.editTask}>
                        <FontAwesomeIcon icon={faPenFancy} />
                    </button>
                </div>
            </div>

        );
    }
}
export default Task;