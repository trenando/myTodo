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
        <div className="newtodo__container">
            <input className="newtodo__input"
                type='text'
                placeholder="addtodo"
                value={props.value}
                onChange={onNewTodoTextChange}
            />
            <button className="newtodo__btn" onClick={onSendTodoClick}>addtodo</button>
        </div>
    )
}