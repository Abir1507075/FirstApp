import { Component, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { FormBuilder, Validators } from '@angular/forms';
import { Contact } from 'src/app/classes/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm = this.fb.group({
    firstName: ['',[Validators.required]],
    lastName: ['',[Validators.required]],
    email: ['',[Validators.required,Validators.email]],
    mobileNumber: ['',[Validators.required,Validators.pattern(/^\d{11}$/)]],
    dateOfBirth: ['',[Validators.required]],

  })
  
  constructor(private contactService:ContactService,private fb:FormBuilder) { }
  
  ngOnInit(): void {
  }
  
  saveContact(){
    let date = this.contactForm.controls.dateOfBirth.value;
    this.contactService.saveContact(new Contact(this.contactForm.value.firstName,
                                                this.contactForm.value.lastName,
                                                this.contactForm.value.email,
                                                this.contactForm.value.mobileNumber,
                                                this.contactForm.value.dateOfBirth));
  }
}
