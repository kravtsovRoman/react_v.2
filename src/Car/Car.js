import React from 'react';

const car = (props) => (
  <div style={{
    border: '2px solid #ccc',
    margin: '10px',
    display: 'inline-block',
    padding: '10px'
  }}>
    <h3>Car name: {props.name}</h3>
    <p>Year: {props.year}</p>
    <input type="text" onChange={props.onChangeName} value={props.name}/>
    <button onClick={props.onDelete}>Delete</button>
  </div>
);

export default car;
