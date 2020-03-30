import React from 'react';
import './NewTodo.scss';

export function NewTodo(props) {

    const onSendTodoClick = () => {
        props.onSendTodoClick()
    }

    const onNewTodoTextChange = (e) => {
        const text = e.target.value
        props.onNewTodoTextChange(text)
    }

    return (
        <div>
            <input type='text'
                placeholder="addtodo"
                value={props.value}
                onChange={onNewTodoTextChange}
            />
            <button onClick={onSendTodoClick}>addtodo</button>
        </div>
    )
}