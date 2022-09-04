import { Injectable } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { contact } from './models/contact.model';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public form: FormGroup = new FormGroup ({
    //  $key:new FormControl (null),
    fullName : new FormControl ('',Validators.required),
    email : new FormControl ('',Validators.email),
    mobile : new FormControl ('',[Validators.required,Validators.minLength(8)]),
    city : new FormControl (''),
    gender : new FormControl ('1'),
    type: new FormControl (''),
    message : new FormControl ('Type your Inquiry'),

});

  savedForms:contact[]=[]

  constructor() { }

  initializeFormGroup(): void {
    this.form.setValue(
        {
        // $key:null,
        fullName :'',
        email :'',
        mobile :'',
        city :'',
        gender :'1',
        subscription:'0',
        message:'',}
    );
}

addQuoteForm(contactForm: contact) {
  this.savedForms.push(contactForm);
  console.log(this.savedForms)
  
}


}
