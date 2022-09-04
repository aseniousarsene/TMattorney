import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { contact } from '../shared/models/contact.model';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  type = [
    {id:1,value:'Municipality Debt'},
    {id:1,value:'General Query'},
    {id:1,value:'Attorney Services'}
  ];

    form= this.contactservice.form;
     breakpoint: number;

  constructor(private contactservice : ContactService) { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 480) ? 1 : 2;
  }

  onResize(event: any): void {
    this.breakpoint = (event.target.innerWidth <= 480) ? 1 : 2;
  }

  onClear(): void {
    this.contactservice.form.reset();
    this.contactservice.initializeFormGroup();
  }

  onSubmit(): void {
    if(this.form.valid){
      console.log(this.form);
      this.contactservice.addQuoteForm(this.form.value);
      this.form.reset();
      this.contactservice.initializeFormGroup();
      }
}
}


