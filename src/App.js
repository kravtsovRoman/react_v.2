import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {
  render() {
    const divStyle = {
      'border': '3px solid #000',
      'color': '#333'
    };

    return (
      <div className="App" style={divStyle} >
        <h1>
          Hello
        </h1>
          <Car/>
      </div>
    );
  }
}

export default App;
