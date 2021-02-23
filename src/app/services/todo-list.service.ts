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
  dialogEvent = new EventEmitter();
  sendToList(message:any){
    this.todoList.push({
      "status":"false",
      "item": message
    });
    this.closeDialog();
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
  closeDialog(){
    this.dialogEvent.emit();
  }
  toggle(item:string){
    this.todoList = this.todoList.map(value=>{
      if(value.item==item)
      {
        value.status = value.status==false?true:false;
        return value
      }
      return value
    })
    this.event.emit(this.todoList);
  }


}
