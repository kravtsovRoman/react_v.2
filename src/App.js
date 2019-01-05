import React, { Component } from 'react';
import './App.scss';
import Car from './Car/Car'
import Counter from './Counter/Counter'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cars: [
        { name: 'Ford', year: '2002' },
        { name: 'Audi', year: '2008' },
        { name: 'Mazda', year: '2022' }
      ],
      pageTitle: 'React Hello',
      showCars: true
    };
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  };

  onChangeName = (name, index) => {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({ cars });

  };

  deleteHandler(index) {
    const cars = [...this.state.cars];
    cars.splice(index, 1);
    this.setState({ cars });
  };

  componentWillMount() {
    console.log('App componentWillMount')
  }

  componentDidMount() {
    console.log('App componentDidMount')
  }

  render() {
    console.log('App render');
    let cars = null;
    if (this.state.showCars) {
      cars = this.state.cars.map((car, i) => {
        return <Car
          key={i}
          name={car.name}
          year={car.year}
          onDelete={this.deleteHandler.bind(this, i)}
          onChangeName={(e) => this.onChangeName(e.target.value, i)}
        />
      })
    }

    return (
      <div className="App" >
        <h1>{this.props.title}</h1>
        <button onClick={this.toggleCarsHandler}>Tooggle cars</button>
        <hr />
        {cars}
        <Counter/>
      </div>
    );
  }
}

export default App;
