import React from 'react';
import './TodoList.scss';
import { TodoItem } from './TodoItem/TodoItem'
import { AddTodo } from './AddTodo/AddTodo';

export function TodoList(props) {
    return (
        <div>
            {
                props.todoReducer.todoItems.map((data,id) => <TodoItem key={id} {...data} />)
            }
            <AddTodo todoReducer={props.todoReducer} store={props.store}/>
        </div>
    )
}