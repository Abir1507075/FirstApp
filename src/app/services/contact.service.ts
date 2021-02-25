import { EventEmitter, Injectable } from '@angular/core';

import { Contact } from '../classes/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
  contactEvent = new EventEmitter();
  contactList:Contact[]= [
    new Contact('abid hasan','abir','abir@gmail.com','0192830193710',new Date('1997/05/23')),
    new Contact('abid hasan','abir','abir@gmail.com','0192830193710',new Date('1997-05-23')),
  ];
  getContacts(){
    return this.contactList;
  }
  getContactsById(id:number){
    return this.contactList[id];
  }
  saveContact(contact:Contact){
    this.contactList.push(contact);
    this.contactEvent.emit();
  }
}
