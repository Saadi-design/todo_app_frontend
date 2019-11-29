import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
class Task extends React.Component {

    deleteTask = () => {
        this.props.deleteTaskFunc(this.props.task.id);
    }
    completeTask = () => {
        this.props.completeTaskFunc(this.props.task.id)
    }
    editTask = () => {
        var newTaskDescription = prompt('Update task', this.props.task.taskDescription);
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
                <div className="col-6 col-md-3">
                
                    <button type="button" className="btn btn-secondary btn-xs" onClick={this.completeTask}>
                    <FontAwesomeIcon icon={faCheckSquare}/>
                    </button>
                </div>
                    <div className="col-6 col-md-3">
                    <button type="button" class="btn btn-danger btn-xs" onClick={this.deleteTask}>
                        <FontAwesomeIcon icon={faTrashAlt}/>
                    </button>
                    </div>
                    <div className="col-4 col-md-2 col-lg-2">
                    <button type="button" className="btn btn-primary btn btn-xs" onClick={this.editTask}>
                    <FontAwesomeIcon icon={faEdit}/>   
                 </button>
                </div>
            </div>

        );
    }
}
export default Task;