import React from 'react';
import './App.css';
import Header from './components/Header';
import TaskCounter from './components/TaskCounter';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
const uuidv4 = require('uuid/v4');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: uuidv4(), taskDescription: "order inhalers", completed: false, date: "2019-11-19"},
        { id: uuidv4(), taskDescription: "complete shopping for trip", completed: true, date: "2019-11-15"},
        { id: uuidv4(), taskDescription: "book flight", completed: false, date: "2019-11-18"},
        { id: uuidv4(), taskDescription: "write cv", completed: true, date: "2019-11-15"},
        { id: uuidv4(), taskDescription: "pay credit card", completed: false, date: "2019-11-21"},
        { id: uuidv4(), taskDescription: "change energy suppliers", completed: true, date: "2019-10-30"}
      ]
    };
  }
  addTaskToList = (task) => {
    let tasks = this.state.tasks;
    tasks.push(task);
    this.setState({ tasks: tasks });
  }
  deleteTask = (taskId) => {

    let tasks = this.state.tasks;

    let filteredTasks = tasks.filter(function (task) {
      return task.id !== taskId;
      
    });
    this.setState({ tasks: filteredTasks });

  }
  render() {
    return (
      <div className="container">
        <Header />
        <AddTask newTask={this.addTaskToList} />
        <TaskCounter count={this.state.tasks.length} />
        <TaskList tasks={this.state.tasks} deleteTaskFunc={this.deleteTask} id={this.Id} />
 </div>

    );
  }
}
export default App;

