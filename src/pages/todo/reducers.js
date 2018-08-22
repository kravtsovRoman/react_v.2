import { ADD_TODO, LIKE_TODO } from './actions';

const initialState = {
    todoList: [
        {
            todoId: 1,
            todoText: 'Todo 1',
            liked: false
        }
    ]
};

function todoReducers(state = initialState, action) {
    switch (action.type) {

        case ADD_TODO:
            return Object.assign({}, state, {
                todoList: [
                    ...state.todoList,
                    {
                        todoId: action.payload.todoId,
                        todoText: action.payload.todoText,
                        liked: false

                    }
                ]
            });

        case LIKE_TODO:
            const index = state.todoList.findIndex(todo => todo.todoId === action.payload.todoId);
            state.todoList[index].liked = true;

            return Object.assign({}, state, {
                todoList: state.todoList
            });

        default: return state;
    }
}

const TodoReducers = {
    todo: todoReducers
};

export default TodoReducers;

