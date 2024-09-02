'use client'

import { useReducer, useEffect } from 'react'
import TodoForm from '@/components/organisms/TodoForm'
import TodoList from '@/components/organisms/TodoList'
import todoReducer from '@/reducers/todoReducer'
import { getTodos } from '@/utils/storage'

export default function TodoTemplate() {
  const [todos, dispatch] = useReducer(todoReducer, [])

  useEffect(() => {
    const storedTodos = getTodos()
    dispatch({ type: 'SET_TODOS', payload: storedTodos })
  }, [])

  const addTodo = (newTodo) => {
    dispatch({ type: 'ADD_TODO', payload: newTodo })
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
