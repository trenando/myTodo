import React from 'react';
import './TodoList.scss';
import { TodoItem } from './TodoItem/TodoItem'
import { NewTodoCont } from './NewTodo/NewTodoCont'

export function TodoList(props) {
    return (
        <div>
            {
                props.todoItems.map((data, id) => <TodoItem key={id} {...data} />)
            }
            <NewTodoCont />
        </div>
    )
}