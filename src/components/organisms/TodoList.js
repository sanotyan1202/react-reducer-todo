'use client'

import TodoItem from '@/components/molecules/TodoItem'

export default function TodoList({ todos, onDelete, onToggle }) {

  return (
    <table>
      <thead>
        <tr>
          <th>完了</th>
          <th>内容</th>
          <th>期限</th>
          <th>削除</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  )
}