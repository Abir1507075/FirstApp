import { Component, OnInit } from '@angular/core';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css','../../app.component.css']
})
export class TodoListComponent implements OnInit {

  public todoList:any[]= [];
  public all = true;
  public complete = false;
  public active  = false;


  constructor(private todoListService:TodoListService) { }
  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
    this.todoListService.event.subscribe(value => this.todoList = value);
  }
  getList(){
    if(this.all){
      return this.todoList.filter(value => {return value});
    }
    else if(this.complete){
      return this.todoList.filter(value => {if(!value.status)return value});
    }
    else return this.todoList.filter(value =>{if(value.status)return value});
  }
  toggle(item:string){
    this.todoList = this.todoList.map(value=>{if(value.item==item){value.status = value.status==false?true:false;return value}return value})
  }
  getAll(event:any){
    event.preventDefault();
    this.all = true;
    this.complete = false;
    this.active = false;
  
  }
  getComplete(event:any){
    event.preventDefault();
    this.all = false;
    this.complete = true;
    this.active = false;
  }
  getActive(event:any){
    event.preventDefault();
    this.all = false;
    this.complete = false;
    this.active = true;
  }
  deleteItem(item:string){
    var conf = confirm('Are sure you want to delete this?');
    if(conf){
      this.todoListService.deleteList(item);
    }
    else alert("nothing changed");
  }
  editItem(item:string){
    var todo = prompt('Edit Todo List',item);
    if(todo == null || todo ==''){
        alert('Nothing Changed');
    }
    else{
        alert('Todo Edited successfully!');
        this.todoListService.editList(item,todo);
    }
  }
}
