import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { TodoListService } from 'src/app/services/todo-list.service';
import { ContactFormComponent } from '../contact-form/contact-form.component';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css','../../app.component.css']
})
export class TodosComponent implements OnInit {
  public todoList:any = [];
  constructor(private todoListService:TodoListService,public dialog:MatDialog) { }
  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }
  saveTodo(message:any){
    this.todoListService.sendToList(message.value);
    message.value = "";
  }
}
