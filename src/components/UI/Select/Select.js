import React from 'react';
import classes from './Select.css';

const Select = props => {
    const htmlForm = `${props.label}-${Math.random()}`;

    return (
        <div className={classes.Select}>
            <label htmlFor={htmlForm}></label>
            <select
                id={htmlForm}
                value={props.value}
                onChange={props.onChange}
            >
                {props.options.map((option, index) => {
                    return (
                        <option
                            value={option.value}
                            key={index}
                        >
                            {option.text}
                        </option>
                    )
                })}
            </select>
        </div>
    )
};

export default Select;
