import React from 'react';
import './DeleteButton.css';

const deleteButton = props => <button className="delete-button" onClick={props.deleted}>x</button>;

export default deleteButton;