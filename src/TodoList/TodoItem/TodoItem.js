import React from 'react';
import './TodoItem.scss';

export function TodoItem(props){
    return(
        <div className="todo__item">
            {props.todo}
        </div>
    )
}