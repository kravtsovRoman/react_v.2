export const ADD_TODO = 'ADD_TODO';
export const LIKE_TODO = 'LIKE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function addTodo(todoId, todoText) {
    return {
        type: ADD_TODO,
        payload: {todoId, todoText}
    };
}

export function likeTodo(todo) {

    const liked = !todo.liked;

    return {
        type: LIKE_TODO,
        payload: todo,
        liked
    };
}

export function deleteTodo(todo) {
    console.log(todo);
    return {
        type: DELETE_TODO,
        payload: todo
    };
}
