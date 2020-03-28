import React from 'react';
import './TodoItem.scss';

export function TodoItem(props){
    return(
        <div>
            {props.todo}
        </div>
    )
}