import React, { Component } from 'react';

import logo from './res.jpg';
import logo1 from './hotel.jpg';
import logo2 from './Accommodation.jpg';

import './App.css';

class App extends Component {
  render() {
    return (
        <div className='App'>
            <a href=""> <img src={logo} height = "250" width="250" hspace="20"/></a>Restaurant
          <a href=""><img src={logo1} height = "250" width="250" hspace="20"/></a>Shops
          <a href="">  <img src={logo2} height = "250" width="250" hspace="20"/></a>Accommodation


        </div>
    );
  }
  }

export default App;


