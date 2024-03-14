import { Component, TemplateRef } from '@angular/core';
import { Todo } from '../../Todos';
import { CommonModule, NgIfContext } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
})
export class TodosComponent {
  localItem: string | undefined | null;
  todos: Todo[] | undefined;
  elseBlock: TemplateRef<NgIfContext<boolean>> | null | undefined;
  constructor() {
    this.localItem = localStorage.getItem('todos');
    if (this.localItem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }
  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos?.indexOf(todo);
    this.todos?.splice(index!, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  addTodo(todo: Todo) {
    this.todos?.push(todo);
    console.log(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
