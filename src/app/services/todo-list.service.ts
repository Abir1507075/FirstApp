import { EventEmitter, Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  todoList:any[] = [];
  
  constructor() {  }

  getTodoList(){
    return this.todoList;
  }
  event = new EventEmitter();
  sendToList(message:any){
    this.todoList.push({
      "status":"false",
      "item": message
    });
  }
  deleteList(message:string){
    this.todoList = this.todoList.filter(value => value.item!= message);
    console.log(this.todoList);
    this.event.emit(this.todoList);
  }
  editList(previous:string,now:string){
    this.todoList = this.todoList.map(value =>{
      if(value.item == previous)value.item = now;
      return value;
    })
    this.event.emit(this.todoList);
  }
}