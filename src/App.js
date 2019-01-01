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
      <div className="App" >
        <h1>
          Hello
        </h1>
          <hr/>
          <Car name={'Ford'} year={2002}>
              <p style={{color: 'red'}}>Color</p>
          </Car>
          <hr/>
          <Car name={'Audi'} year={2010} />
          <hr/>
          <Car name={'Mazda'} year={2008} />
          <hr/>
      </div>
    );
  }
}

export default App;
