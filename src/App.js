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


  handleClick = (newTitle, newTitle2) => {
    newTitle2 = newTitle2 || '';
    this.setState({
      pageTitle: newTitle + newTitle2
    })
  };

  render() {
    const cars = this.state.cars;

    return (
      <div className="App" >
        <h1>
          {this.state.pageTitle}
        </h1>
        <button onClick={this.handleClick.bind(this, 'Changed!')}>Change title</button>
          <hr/>
        {
          cars.map((item, i) => {
          return <Car
            key={i}
            name={item.name}
            year={item.year}
            onChangeTitle={this.handleClick.bind(this, item.name, item.year)}
          />
        })}
      </div>
    );
  }
}

export default App;
