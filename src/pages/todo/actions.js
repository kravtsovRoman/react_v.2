export const ADD_TODO = 'ADD_TODO';
export const LIKE_TODO = 'LIKE_TODO';

export function addTodo(todoId, todoText) {
    return {
        type: ADD_TODO,
        payload: {todoId, todoText}
    };
}

export function likeTodo(todo) {
    return {
        type: LIKE_TODO,
        payload: todo
    };
}
