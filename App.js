import React, { Component } from 'react';
import './App.css';
import  AboutUs from './AboutUs';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
            <table>
                <tr>
                    <td><button type="button">Home</button></td>
                    <td><button type="button">About Us<AboutUs/></button></td>
                    <td><button type="button">Contact Us<Contact/></button></td>
                    <td><button type="button">Search</button></td>
                </tr>
            </table>
      </div>

    );
  }
}

export default App;
