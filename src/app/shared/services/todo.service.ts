import { inject, Injectable } from '@angular/core';
import { Itodos } from '../model/todos';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos : Array<Itodos>=[
    {
      todoItem : "Angular 18",
      todoId : "1234"
    },
    {
      todoItem : "Node 18",
      todoId : "1235"
    }
  ]

  private _snackBarService = inject(SnackBarService)
  constructor() { }

  fetchAllTodos(): Array<Itodos>{
    // api call to fetch all TODOS
    return this.todos
  }

  addNewTodo(todo: Itodos){
    //api call to add new todo
    this.todos.push(todo)
    //snackbar msg >>new todoitem added successfully!!!!
    this._snackBarService.openSnackBar(`New Todo Item ${todo.todoItem} added successfully!!!!`)

  }
  removeTodo(id:string){
    //api call to remove todoItem from DB
    let getIndex = this.todos.findIndex(todo=>
      todo.todoId === id
    )
    console.log(getIndex)
    let removeObj = this.todos[getIndex]
    this.todos.splice(getIndex, 1)
    this._snackBarService.openSnackBar(`Todo item ${removeObj.todoItem}  removed successfully!!!`)
  }
}
