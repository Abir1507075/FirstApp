import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListService } from './services/todo-list.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ViewContactComponent } from './components/view-contact/view-contact.component';
import { HomeComponent } from './components/home/home.component';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ContactComponent } from './components/contact/contact.component';
import {MatListModule} from '@angular/material/list';




@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoListComponent,
    ContactFormComponent,
    ContactListComponent,
    ViewContactComponent,
    HomeComponent,
    ContactComponent
  ],
  entryComponents:[
    ContactFormComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,


    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
