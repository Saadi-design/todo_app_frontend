import React from 'react';
class Task extends React.Component {

    deleteTask = () => {
        this.props.deleteTaskFunc(this.props.task.id);
    }
    completeTask = () => {
        this.props.completeTaskFunc(this.props.task.id)
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

                    <button type="button" className="btn btn-primary btn-sm" onClick={this.completeTask}>
                        Done
                    </button>
                </div>
                <div>
                    <div className="col-6 col-md-3">

                        <button type="button" className="btn btn-danger btn-sm" onClick={this.deleteTask}>
                            Delete
                    </button>
                    </div>
                </div>
            </div>

        );
    }
}
export default Task;