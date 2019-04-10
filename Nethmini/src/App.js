import React, { Component } from 'react';

import './App.css';
//import search from './search';

import Main from './Main';
import Bar from "./Bar";
//import AboutUs from "components/AboutUs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Bar/>
      <Main/>
      

      </div>
    );
  }
}

export default App;
