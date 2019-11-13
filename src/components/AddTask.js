import React from "react";
class AddTask extends React.Component {
 state = {
   taskDescription: ""
 }
 addTask = () => {
   const task = {
       id: 1,
       taskDescription: this.state.taskDescription,
       completed: false
   }
   this.props.newTask(task);
   this.setState({taskDescription: ""});
 }
 taskDescriptionChanged = (event) => {
   let taskDescription = this.state.taskDescription;
   taskDescription = event.target.value;
   this.setState({taskDescription});
 }
 render() {
   return (
     <div className="row">
       <div className="col-12 col-md-10">
         <input
           className="form-control"
           type="text"
           placeholder="What do you want to do..."
           value={this.state.taskDescription}
           onChange={this.taskDescriptionChanged}
         />
       </div>
       <div className="col-12 col-md-2">
         <button type="button" className="btn btn-success" onClick={this.addTask}>
           CREATE
         </button>
       </div>
     </div>
   );
 }
}
export default AddTask;