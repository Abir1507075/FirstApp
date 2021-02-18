import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoListService } from 'src/app/services/todo-list.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css','../../app.component.css']
})
export class TodosComponent implements OnInit {
  public todoList:any = [];
  constructor(private todoListService:TodoListService) { }
  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }
  saveTodo(message:any){
    this.todoListService.sendToList(message.value);
    message.value = "";
  }
}
