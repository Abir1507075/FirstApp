import { Component, Input, OnInit } from '@angular/core';
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

  @Input('parentData')public contactList:Contact[] = []; 
  constructor(private router:Router) { 
    
  }

  ngOnInit(): void {
  }
  
  onSelect(id:number){
    this.router.navigate(['/contact',id]);
  }
}
