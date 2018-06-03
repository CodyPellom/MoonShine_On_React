import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lander from './components/Lander';
import NavBar from './components/NavBar';
import Main from './components/Main';
import JohnPapPellom from './components/JohnPapPellom';
import JohnPapPellomTwo from './components/JohnPapPellomTwo';
import Sticky from 'react-sticky-el';
import { FainFamily } from './components/FainFamily';




class App extends Component {
  render() {
    return (
      <div className="App">

       <Lander />
       <Sticky>
       <NavBar />
       </Sticky>
       <Main />
       <JohnPapPellom />
       <JohnPapPellomTwo />
       <FainFamily />
      </div>
    );
  }
}

export default App;
