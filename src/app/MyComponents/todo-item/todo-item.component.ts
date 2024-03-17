import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todos';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() i : number | undefined;
  @Input() todo: Todo | undefined;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
isActive: any;
  onClick(todo: Todo | undefined) {
    this.todoDelete.emit(todo);
    console.log('onClick has been triggered');
  }
  onCheckboxClick(todo: Todo | undefined) {
    this.todoCheckbox.emit(todo);
  }
}
