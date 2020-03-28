const ADD_TODO = 'ADD-TODO'
const UPDATE_TODO = 'UPDATE-TODO'

const initialState = {//начальный стейт
    todoItems: [
        {
            id: 1,
            todo: 'Create todo'
        },
        {
            id: 2,
            todo: 'First text'
        }
    ],
    addTodo: ""
}

export function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            const newTodo = { //создание нового элемента
                id: Date.now(),
                todo: state.addTodo
            }
            state.todoItems.push(newTodo) //создание последнего элемента массива
            state.addTodo = ''//обнуление написанного в инпуте
            return state
        case UPDATE_TODO:
            state.addTodo = action.newText//изменине на каждую букву
            return state
        default:
            return state
    }
}

export const addTodoActionCreator = () => ({ type: ADD_TODO })
export const updateTodoActionCreator = (text) => {
    return (
        {
            type: UPDATE_TODO,
            newText: text
        }
    )
}
