import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TodoListService } from 'src/app/services/todo-list.service';
import { TodosComponent } from '../todos/todos.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css','../../app.component.css']
})
export class TodoListComponent implements OnInit {

  public todoList:any[]= [];
  public displayList:any[]=[];

  constructor(private todoListService:TodoListService,public dialog:MatDialog) { }
  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
    this.displayList = this.todoList;
    this.todoListService.event.subscribe(value => this.todoList = value);
    this.todoListService.dialogEvent.subscribe(()=>{
      this.dialog.closeAll();
    })
  }
  toggle(item:string){
    this.todoListService.toggle(item);
  }
  getAll(){
    this.displayList = this.todoList.filter(value => {return value});
  }
  getComplete(){
    this.displayList = this.todoList.filter(value => {if(!value.status)return value});
  }
  getActive(){
    this.displayList = this.todoList.filter(value =>{if(value.status)return value});
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
  openForm(){
    this.dialog.open(TodosComponent,{
      height:'400px',
      width:'600px'
    });
  }
}
