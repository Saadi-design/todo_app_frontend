import React from 'react';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Task from './components/Task';

function App() {
  
  return (
    <div className="container">
    <Header />
    <Intro introDescription="Hello there!"/>
    <Intro introDescription="Whooo!!"/>
    <Task taskDescription="Buy some milk" />
    <Task taskDescription="Pickup dog food" />
    <Task taskDescription="Buy some chocolate" />
    <Task taskDescription="Do homework" />
    </div>
  );
}

export default App;
