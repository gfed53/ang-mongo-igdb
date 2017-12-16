import { Component, OnInit } from '@angular/core';


// Services
import { TodoService } from '../services/todo.service';

import { Todo } from '../types/todo';
import { MOCK_TODOS } from '../mockData';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

	public todos: Todo[];

	public todoInput: string;

	getTodos(): void {
		this._todoService.getTodos()
			.subscribe(todos => {
				console.log('in subscribe, todos: ', todos);
				this.todos = todos;
			});
	}

	addTodo(todoDescription: string): void{

		// let todoObj = {
		// 	description: todoDescription
		// };

		this._todoService.addTodo(todoDescription)
			.subscribe(todo => {
				console.log('new todo:', todo);

				// Refresh list
				this.getTodos();

				//Clear input field
				this.todoInput = '';

			});

	}

	updateTodo(todo: Todo): void {
		this._todoService.updateTodo(todo)
			.subscribe(todo => {
				console.log('updated todo:', todo);

				// Refresh list
				this.getTodos();

			});

		
	}

	deleteTodo(todo: Todo): void {
		this._todoService.deleteTodo(todo)
			.subscribe(todo => {
				console.log('deleted todo:', todo);

				// Refresh list
				this.getTodos();

			});
	}




  constructor(private _todoService: TodoService) { }

  ngOnInit() {
  	console.log('TodoList oninit');
  	this.getTodos();
  	console.log('this.todos', this.todos);
  }

}
