import React from 'react';
import './Person.css';

const Person = props => {
    return(
        <div className="Person">
            <h1>{props.name}</h1>
            <p> Age: {props.age}
            <button onClick={props.onClick}>+</button>
            </p>
            <p>{props.children}</p>
            <p>
                <input type="text" value={props.name} onChange={props.onChange}/>
            </p>
        </div>
    )
};

export default Person;