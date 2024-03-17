import { Component, TemplateRef } from '@angular/core';
import { Todo } from '../../Todos';
import { CommonModule, NgIfContext } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
})
export class TodosComponent {
  localItem: string | null | undefined;
  todos: Todo[] = [];
  elseBlock: TemplateRef<NgIfContext<boolean>> | null | undefined;

  constructor() {
    this.localItem = localStorage.getItem('todos');
    this.todos = this.localItem ? JSON.parse(this.localItem) : [];
  }

  deleteTodo(todo: Todo) {
    const index = this.todos?.indexOf(todo);
    if (index !== undefined && index !== -1) {
      this.todos?.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  addTodo(todo: Todo) {
    this.todos?.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo) {
    const index = this.todos?.indexOf(todo);
    if (index !== undefined && index !== -1) {
      this.todos[index].isActive = !this.todos[index].isActive;
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }
}
