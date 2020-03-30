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
            //создание нового элемента
            const newTodo = {
                id: Date.now(),
                todo: state.addTodo
            }
            //заебатое оформление return
            return {
                ...state,
                //создание последнего элемента массива, можно еще в начало
                todoItems: [...state.todoItems, newTodo],
                //обнуление написанного в инпуте
                addTodo: ''
            }
        case UPDATE_TODO:
            //изменение на каждую букву
            return {
                ...state,
                addTodo: action.newText
            }
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
