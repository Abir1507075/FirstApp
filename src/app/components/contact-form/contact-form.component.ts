import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/classes/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(private contactService:ContactService) { }
  newContact = new Contact('','','','');
  ngOnInit(): void {
  }
  saveContact(){
    this.contactService.saveContact(this.newContact);
  }

}
