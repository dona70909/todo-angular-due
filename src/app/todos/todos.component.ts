import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { MatDialog } from '@angular/material/dialog';
import { Todo } from '../shared/todo.model';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private dataService: DataService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }

  onFormSubmit(form: NgForm) {
    //if (form.invalid) return alert('Form is invalid');
    console.log('submitted');
    console.log(form.value);
    console.log(form.value.text);
    this.dataService.addTodo(new Todo(form.value.text));
    form.reset();
  }

  toggleCompleted(todo: Todo) {
    //set todo completed
    todo.completed = !todo.completed;
  }

  editTodo(todo: Todo) {
    //this.dataService.updateTodo()
    const index = this.todos.indexOf(todo);
    console.log('index + todoedited infos');
    let dialogRef = this.dialog.open(EditTodoDialogComponent, {
      width: '700px',
      data: todo,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataService.updateTodo(index, result);
      }
    });
  }

  delete(t: Todo, i: number) {
    this.dataService.deleteTodo(i);
  }
}
