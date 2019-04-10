import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Topics from "./Topics";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topics/>
      </div>
    );
  }
}

export default App;
