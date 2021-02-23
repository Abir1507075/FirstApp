import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Contact } from 'src/app/classes/contact';
import { ContactService } from 'src/app/services/contact.service';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(public dialog:MatDialog,private contactService:ContactService,private router:Router) { 
    this.contactList = this.contactService.getContacts();
    this.contactService.contactEvent.subscribe(()=>{
      this.contactList = this.contactService.getContacts();
    })
  }

  ngOnInit(): void {
  }
  contactList:Contact[]=[];
  openForm(){
    this.dialog.open(ContactFormComponent,{
      height:'600px',
      width:'800px',
      disableClose:true
    });
  }
  onSelect(id:number){
    this.router.navigate(['/contact',id]);
  }
}
