import React from 'react';

export default function TodoList(props) {
    return (
    <li>
    <h3>{props.text}</h3>
    </li>
    );
}