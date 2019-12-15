import React from 'react';
import './App.css';
import Header from './components/Header';
import TaskCounter from './components/TaskCounter';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, faPlusSquare, faCheckSquare, faComments, faPenFancy, faShoePrints } from '@fortawesome/free-solid-svg-icons';


library.add
  (
    faTrashAlt,
    faPlusSquare,
    faCheckSquare,
    faPenFancy,
    faShoePrints,
    faComments
  );


const uuidv4 = require('uuid/v4');
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        // { id: uuidv4(), taskDescription: "order inhalers", completed: false, date: "2019-11-19" },
        // { id: uuidv4(), taskDescription: "complete shopping for trip", completed: true, date: "2019-11-15" },
        // { id: uuidv4(), taskDescription: "book flight", completed: false, date: "2019-11-18" },
        // { id: uuidv4(), taskDescription: "write cv", completed: true, date: "2019-11-15" },
        // { id: uuidv4(), taskDescription: "pay credit card", completed: false, date: "2019-11-21" },
        // { id: uuidv4(), taskDescription: "change energy suppliers", completed: true, date: "2019-10-30" }
      ]
    };
   
  }
  componentDidMount(){
    axios.get('https://nwhiw948b6.execute-api.eu-west-2.amazonaws.com/dev/tasks')
    .then( (response) => {
      // handle success
      this.setState({tasks:response.data.tasks});
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
}
  addTaskToList = (task) => {
    axios.post('https://nwhiw948b6.execute-api.eu-west-2.amazonaws.com/dev/tasks' ,task)
    .then((response) => {
      let tasks = this.state.tasks;
      task.id = response.id;
      tasks.push(task);
      this.setState({tasks: tasks});
    });
  }
deleteTask = (taskId) => {
  axios.delete(
    'https://nwhiw948b6.execute-api.eu-west-2.amazonaws.com/dev/tasks/+id')
    .then((response) => {
      const filteredTask = this.state.tasks.filter(item => {
        return task.id !== taskId;
      });
      this.setState({
        tasks: filteredTask
      })
    })
    .catch(function (error) {
      console.log(error);
    });
}

  
  completeTask = (taskId) => {
    axios.update('https://nwhiw948b6.execute-api.eu-west-2.amazonaws.com/dev/tasks/+id') 
    .then((response) => {
    const completeTask = this.state.tasks.map(task => {
      if (task.id === taskId) {
        task.completed = true
      }
      return task;
    });
    this.setState({ tasks: completeTask })
  });
  
  // editTask = (id, newTaskDescription) => {
  //   console.log(id, newTaskDescription);
  //   if (newTaskDescription === "") {

  //     return;
  //   }
    const tasksCopy = this.state.tasks.slice();
    tasksCopy.forEach(task => {
      if (task.id === id) {
        task.taskDescription = newTaskDescription
      }

    });
    console.log(tasksCopy);
    this.setState({
      tasks: tasksCopy
    });

  }
  markTaskAsActive = (taskId) => {
    const activeTasks = this.state.tasks.map(function (task) {
      if (task.id === taskId) {
        task.completed = false
      }
      return task
    });
    this.setState({
      tasks: activeTasks
    })
  }


  render() {
    return (
      <div className=" App">
        <hr />
        <Header />
        <hr />

        <AddTask newTask={this.addTaskToList} />
        <hr />
        <TaskCounter count={this.state.tasks.length} />
        <hr />
        <TaskList tasks={this.state.tasks} completeTaskFunc={this.completeTask} deleteTaskFunc={this.deleteTask} editTaskFunc={this.editTask} />
        <hr />
        <Footer />
      </div>
    );
  }
}

export default App;