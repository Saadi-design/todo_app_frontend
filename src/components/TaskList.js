import React from "react";
import Task from "./Task";
class TaskList extends React.Component {
 render() {
   return (
     <div>
       {this.props.tasks.map((task, index) => {
       
          return <Task deleteTaskFunc={this.props.deleteTaskFunc} task={task} key={index} />;

       })
       }
     </div>
   );
 }
}
export default TaskList;