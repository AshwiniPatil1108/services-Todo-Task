import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { NgForm } from '@angular/forms';
import { Itodos } from '../../model/todos';
import { UuidService } from '../../services/uuid.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @ViewChild('todoForm') todoForm ! : NgForm
  private _todoService = inject(TodoService)
  constructor(
    //private _todoService : TodoService,
    private _uuidService :UuidService,
    //private _snacknar : MatSnackBar
  ) { }
  ngOnInit(): void {
  }
  onTodoAdd(){
    if(this.todoForm.valid){
      let todoObj : Itodos= {...this.todoForm.value, todoId : this._uuidService.generateUuid() };
      //todoObj.todoId = this._uuidService.generateUuid()
      console.log(todoObj);
      this._todoService.addNewTodo(todoObj)
      this.todoForm.reset();
      // this._snacknar.open(`Todo added successfully!!!`, "Close",{
      //   horizontalPosition:"left",
      //   verticalPosition:"top",
      //   duration:2500
      // }) not reuasable
    }
  }

}
