import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = new Todo('test');
  @Output() todoClicked: EventEmitter<void>;
  @Output() editClicked: EventEmitter<void>;
  @Output() deleteClicked: EventEmitter<void>;
  constructor() {
    this.todoClicked = new EventEmitter<void>();
    this.editClicked = new EventEmitter<void>();
    this.deleteClicked = new EventEmitter<void>();
  }

  ngOnInit(): void {}

  onTodoClicked() {
    this.todoClicked.emit();
  }

  onEditClicked() {
    this.editClicked.emit();
  }
  onDeleteClicked() {
    this.deleteClicked.emit();
  }
}
