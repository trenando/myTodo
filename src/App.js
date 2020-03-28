import React from 'react';
import { TodoList } from './TodoList/TodoList';

function App(props) {
    return (
        <React.Fragment>
            <TodoList
                todoReducer={props.state.todoReducer}
                store={props.store}
            />
        </React.Fragment>
    );
}

export default App;