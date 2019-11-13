import React from 'react';
import './App.css';
import uuid from "uuid/v4";
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import TaskCounter from './components/TaskCounter';
import Task from './components/Task.js';
// function App() {
//   return (
//     <div className = "container" >
//     < Header />
//      <TaskList listAdded = "ADD NEW TASK HERE "/>
//       <AddTask taskDescription = "remaining task"/>
//        <Task taskDescription = "Iman's PTA @ 6pm" />
//        <Task taskDescription = "make orthodontist appointment for Arryan" />
//        <Task taskDescription = "book theory test for Areesh" />
//        <Task taskDescription = "take windows measurement to order curtain " />
//        <Task taskDescription = "pick up prescription from GP" />
//         <Footer  addButton = "add button "/>
//    </div>
//   );
// }
class App extends React.Component {
state = {
 tasks:[]
}
 addTaskToList = (task) => {
   let tasks = this.state.tasks;
     tasks.push(task);
     this.setState({tasks});
 }
 render() {
   return (
     <div className="container">
       <Header />
       <AddTask newTask={this.addTaskToList} />
       <TaskCounter count={this.state.tasks.length} />
       <TaskList tasks={this.state.tasks} />
       <Footer />
     </div>
   );
 }
}
export default App;
