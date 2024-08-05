// src/stores/TodoStore.ts
import { makeAutoObservable } from 'mobx';

class TodoStore {
  todos = ['Buy milk', 'Write code'];
  newTodo = '';

  constructor() {
    makeAutoObservable(this);
  }

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push(this.newTodo.trim());
      this.newTodo = '';
    }
  }

  setNewTodo(value: string) {
    this.newTodo = value;
  }
}

const store = new TodoStore();
export default store;
