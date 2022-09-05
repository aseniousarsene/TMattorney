import { Injectable } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { contact } from './models/contact.model';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc, } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
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

  constructor(private firestore: Firestore) { }

  initializeFormGroup(): void {
    this.form.setValue(
        {
        // $key:null,
        fullName :'',
        email :'',
        mobile :'',
        city :'',
        gender :'1',
        type:'0',
        message:'',}
    );
}

getcontactForms():Observable<contact[]> {
  const notesRef = collection(this.firestore, 'contactForm');
  
  return collectionData(notesRef, { idField: 'id'}) as Observable<contact[]>;
}

addcontactForm(contactForm: contact)  {


  const notesRef = collection(this.firestore, 'contactForm');
  return addDoc(notesRef, contactForm);
  
}


}
