import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, TodosComponent, RouterLink],
})
export class AppComponent {
  title = 'angular_todo-list';
}
