export const GET_TODOS = 'GET_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
const APIURL = 'http://localhost:3001/api/todos/';

function handleTodos(data) {
  return {
    type: 'GET_TODOS',
    data
  }
}

function handleAdd(todo) {
  return {
    type: 'ADD_TODO',
    todo
  }
}

function handleRemove(id) {
  return {
    type: 'REMOVE_TODO',
    id
  }
}

export function getTodos() {
  return dispatch => {
    return fetch(APIURL)
      .then(res => res.json())
      .then(data => dispatch(handleTodos(data)))
      .catch(err => console.log(err))
  }
}

export function addTodo(todo) {
  return dispatch => {
    return fetch(APIURL, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({ todo })
    })
      .then(res => res.json())
      .then(data => dispatch(handleAdd(data)))
      .catch(err => console.log(err))
  }
}

export function removeTodo(id) {
  return dispatch => {
    let DELETEURL = APIURL + id;
    return fetch(DELETEURL, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => dispatch(handleRemove(id)))
    .catch(err => console.log(err))
  }
}