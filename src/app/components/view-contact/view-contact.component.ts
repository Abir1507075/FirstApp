import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/classes/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  constructor(private route:ActivatedRoute,private contactService:ContactService) { }
  public id = 0;
  contact = new Contact('','','','',new Date());
  ngOnInit(): void {
    let k  = this.route.snapshot.paramMap.get('id');
    this.id = (k==null)? -1:parseInt(k);
    this.contact = this.contactService.getContactsById(this.id);
  }

  view(){
    console.log(this.contactService.getContactsById(this.id));
  }

}
