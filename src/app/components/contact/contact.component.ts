import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Contact } from 'src/app/classes/contact';
import { ContactService } from 'src/app/services/contact.service';
import { ContactFormComponent } from '../contact-form/contact-form.component';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactList:Contact[]=[];
  constructor(public dialog: MatDialog,private contactService: ContactService,) {
    this.contactList = this.contactService.getContacts();
    this.contactService.contactEvent.subscribe(()=>{
      this.contactList = this.contactService.getContacts();
    })
  }

  ngOnInit(): void {
  }
  openForm(){
    this.dialog.open(ContactFormComponent,{
      height:'600px',
      width:'800px',
      disableClose:true
    });
  }

}
