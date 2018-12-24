import React from 'react';
import './Person.css';

const Person = props => {
    return(
        <div className="Person">
            <h1>{props.name}</h1>
            <p> Age: {props.age}</p>
            <p>{props.children}</p>
        </div>
    )
};

export default Person;