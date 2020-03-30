import { TodoList } from './TodoList';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        todoItems: state.todoReducer.todoItems
    }
}

export const TodoListCont = connect(mapStateToProps)(TodoList)