// src/components/TodoList.tsx
import React from 'react';
import { observer } from 'mobx-react-lite';
import todoStore from '../stores/TodoStore';
const Button = React.lazy(() => import('compoKit/Button')); // 引入 CompoKit 组件

const TodoList = observer(() => {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoStore.todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <input
        type="text"
        value={todoStore.newTodo}
        onChange={(e) => todoStore.setNewTodo(e.target.value)}
      />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Button onClick={() => todoStore.addTodo()}>Add Todo</Button>
      </React.Suspense>
    </div>
  );
});

export default TodoList;
