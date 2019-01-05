import React from 'react'
import Radium from 'radium'
import './car.css';


class Car extends React.Component {
  render() {
    const inputClasses = ['input'];

    if (this.props.name !== '') {
      inputClasses.push('green');
    } else {
      inputClasses.push('red');
    }

    if (this.props.name.length > 4) {
      inputClasses.push('bold');
    }

    const style = {
      border: '2px solid #ccc',
      boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .2)',
      ':hover': {
        border: '2px solid #aaa',
        boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .4)',
        cursor: 'pointer'
      }
    }

    return (
      <div className="car" style={style}>
        <h3>Car name: {this.props.name}</h3>
        <p>Year: {this.props.year}</p>
        <input
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(' ')}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    )
  }
}

export default Radium(Car);
