'use client'

import { useReducer } from 'react'
import TodoForm from '@/components/organisms/TodoForm'
import TodoList from '@/components/organisms/TodoList'
import todoReducer from '@/reducers/todoReducer'
import { getTodos, saveTodos } from '@/utils/storage'

export default function TodoTemplate() {
  const initialState = getTodos()
  const [todos, dispatch] = useReducer(todoReducer, initialState)

  const addTodo = (todo) => {
    dispatch({ type: 'ADD_TODO', payload: todo })
  }

  const deleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id })
  }

  const toggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id })
  }

  return (
    <div>
      <h1>TODOアプリ</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
    </div>
  )
}