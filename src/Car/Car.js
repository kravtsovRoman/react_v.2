import React from 'react';

const car = (props) => (
    <div>
        <h3>Car name: {props.name}</h3>
        <strong>Year: {props.year}</strong>
        {props.children}
    </div>
);

export default car;
