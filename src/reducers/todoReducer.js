import { getTodos, saveTodos } from '@/utils/storage'


export default function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodos = [...state, action.payload]
      saveTodos(newTodos)
      return newTodos

    case 'DELETE_TODO':
      const filteredTodos = state.filter(todo => todo.id !== action.payload)
      saveTodos(filteredTodos)
      return filteredTodos

    case 'TOGGLE_TODO':
      const toggledTodos = state.map(todo =>
        todo.id === action.payload ? { ...todo, checked: !todo.checked } : todo
      )
      saveTodos(toggledTodos)
      return toggledTodos

    default:
      return state
  }
}