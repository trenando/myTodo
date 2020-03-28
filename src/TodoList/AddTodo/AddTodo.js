import React from 'react';
import './AddTodo.scss';
import { addTodoActionCreator, updateTodoActionCreator } from '../../redux/reducer'

export function AddTodo(props) {

    const onSendTodoClick = () => {
        props.store.dispatch(addTodoActionCreator())
    }

    let onNewTodoTextChange = (e) => {
        let text = e.target.value
        props.store.dispatch(updateTodoActionCreator(text))
        console.log(text)
    }

    return (
        <div>
            <input type='text'
                placeholder="addtodo"
                value={props.todoReducer.addTodo}
                onChange={onNewTodoTextChange}
            />
            <button onClick={onSendTodoClick}>addtodo</button>
        </div>
    )
}