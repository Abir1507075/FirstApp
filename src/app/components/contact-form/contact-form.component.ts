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
    dateOfBirth: this.fb.group({
      year:['',Validators.required],
      month:[{value:'',disabled:true},[Validators.required]],
      day:[{value:'',disabled:true},[Validators.required]]
    })
  })
  yearNow = new Date().getFullYear();
  
  constructor(private contactService:ContactService,private fb:FormBuilder) { }
  days:number[] = [];
  year:number[] = [];
  ngOnInit(): void {
    for ( let i = 0; i<100;i++){
      this.year.push(this.yearNow-i);
    }
    console.log(this.contactForm.controls['dateOfBirth'].get('year')?.touched);
    
  }
  isMonthOkay(){
    if(this.contactForm.controls.dateOfBirth.get('month')?.value != ""){
      this.contactForm.controls.dateOfBirth.get('day')?.enable();
      for(let value of this.months){
        if(value.month==this.contactForm.controls.dateOfBirth.get('month')?.value){
          for(let i = 1;i<=value.day;i++){
            this.days.push(i);
          }
        }
      }
      console.log(this.contactForm.controls.dateOfBirth.get('day'))
    };
  }
  isYearOkay(){
    if(this.contactForm.controls.dateOfBirth.get('year')?.value !=""){
      this.contactForm.controls.dateOfBirth.get('month')?.enable();
      if(this.isLeapYear(this.contactForm.controls.dateOfBirth.get('year')?.value)){
        this.months[1].day=29;
      }
      else{
        this.months[1].day=28;
      }
    }
  }
  saveContact(){
    let date = this.contactForm.controls.dateOfBirth.value;
    this.contactService.saveContact(new Contact(this.contactForm.value.firstName,
                                                this.contactForm.value.lastName,
                                                this.contactForm.value.email,
                                                this.contactForm.value.mobileNumber,
                                                new Date(date.year+'-'+date.month+'-'+date.day)));
  }
  months = [
    {id:1,month:'January',day:31},
    {id:2,month:'February',day:28},
    {id:3,month:'March',day:31},
    {id:4,month:'April',day:30},
    {id:5,month:'May',day:31},
    {id:6,month:'June',day:30},
    {id:7,month:'July',day:31},
    {id:8,month:'August',day:31},
    {id:9,month:'September',day:30},
    {id:10,month:'October',day:31},
    {id:11,month:'November',day:30},
    {id:12,month:'December',day:31}
  ];
  isLeapYear(year:string):boolean{
    let yearNum = parseInt(year);
    if(yearNum%400===0)return true;
    if(yearNum%100==0)return false;
    if(yearNum%4==0)return true;
    return false;
  }
}
