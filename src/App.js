import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {

  state = {
    cars: [
      {name: 'Ford', year: '2002'},
      {name: 'Audi', year: '2008'},
      {name: 'Mazda', year: '2022'}
    ],
    pageTitle: 'React Hello'
  };

  handleClick = () => {
    this.setState({
      pageTitle: 'React is COOL!!!'
    })
  };

  render() {
    const cars = this.state.cars;

    return (
      <div className="App" >
        <h1>
          {this.state.pageTitle}
        </h1>
        <button onClick={this.handleClick}>Change title</button>
          <hr/>
        {
          cars.map(function(item, i) {
          return <Car key={i} name={item.name} year={item.year} />
        })}
      </div>
    );
  }
}

export default App;
