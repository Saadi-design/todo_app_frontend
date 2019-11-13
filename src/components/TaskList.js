import React from "react";
class TaskCounter extends React.Component {
 render() {
   return (
       <div className="row d-none d-md-block">
           <div className="col">
               You have {this.props.count} tasks remaining
           </div>
       </div>
   );
 }
}
export default TaskCounter;
import React from "react";
import Task from "./Task";
class TaskList extends React.Component {
 render() {
   return (
     <div>
       {this.props.tasks.map(function(task, index) {
         return <Task task={task} key={index} />;
       })}
     </div>
   );
 }
}
export default TaskList;