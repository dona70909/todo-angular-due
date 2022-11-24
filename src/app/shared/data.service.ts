import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  todos: Todo[];
  constructor() {
    this.todos = [new Todo('Donatella'), new Todo('dsajkj')];
  }

  getAllTodos() {
    return this.todos;
  }

  addTodo(t: Todo) {
    this.todos.push(t);
  }

  updateTodo(index: number, updateTodo: Todo) {
    this.todos[index] = updateTodo;
  }

  deleteTodo(index: number) {
    /* elimina il primo elemento dalla posizione index therfore il primo che trovi */
    this.todos.splice(index, 1);
  }
}
