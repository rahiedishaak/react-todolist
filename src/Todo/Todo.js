import React from 'react';
import './Todo.css';
import DeleteButton from './../DeleteButton/DeleteButton';

const todo = props => {
    const style = {textDecoration: 'line-through'};

    return (
        <p className="todo">
            <label className="todo-label" style={props.done ? style : null}>
                <input className="todo-checkbox" type="checkbox" onChange={props.changed} checked={props.done} /> {props.body}
            </label>
            <DeleteButton deleted={props.deleted} />
        </p>
    );
};

export default todo;