import React from 'react';
import './AddTodoForm.css';

const addTodoForm = props => {
    return (
        <form className="add-todo-form" onSubmit={props.submit} autoComplete="off">
            <input className="add-todo-field" type="text" name="todoInputField" placeholder="Nieuwe Taak" />
            <input className="add-todo-button" type="submit" value="Post" />
        </form>
    );
};

export default addTodoForm;