import { addTodoActionCreator, updateTodoActionCreator } from '../../redux/reducer';
import { NewTodo } from './NewTodo';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        value: state.todoReducer.addTodo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSendTodoClick: () => {
            dispatch(addTodoActionCreator())
        },
        onNewTodoTextChange: (text) => {
            dispatch(updateTodoActionCreator(text))
        }
    }
}

export const NewTodoCont = connect(mapStateToProps, mapDispatchToProps)(NewTodo)