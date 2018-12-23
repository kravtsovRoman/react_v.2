import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const divStyle = {
      'border': '3px solid #ccc',
      'color': 'red'
    };

    return (
      <div className="App" style={divStyle} >
        <h1 style={{fontSize: '60px'}}>
          Hello
        </h1>
        <h3 style={{color: 'blue'}}>Re Re</h3>
      </div>
    );
  }
}

export default App;
