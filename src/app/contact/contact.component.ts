import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { contact } from '../shared/models/contact.model';
import {MatDialogRef} from '@angular/material/dialog';
import { MatDialog, MatDialogConfig } from  '@angular/material/dialog';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { FormGroup,FormControl,Validators } from '@angular/forms';

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

  form: FormGroup = new FormGroup ({
    //  $key:new FormControl (null),
    fullName : new FormControl ('',Validators.required),
    email : new FormControl ('',Validators.email),
    mobile : new FormControl ('',[Validators.required,Validators.minLength(8)]),
    city : new FormControl (''),
    gender : new FormControl ('1'),
    type: new FormControl (''),
    message : new FormControl ('Type your Inquiry'),

});   
  
 
     breakpoint: number;
     savedcontact:contact[]=[];
    

  constructor(private contactservice : ContactService, private dialogRef: MatDialogRef< ContactComponent>,private matdialog:MatDialog) { }

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
  thanks(){
    const dialogConfig3 = new MatDialogConfig ();
    dialogConfig3.disableClose =false;
    dialogConfig3.autoFocus=true ;
    // dialogConfig2.panelClass='dialog-responsive2';
    dialogConfig3.width='40%';
    this.matdialog.open(ThankyouComponent,dialogConfig3);
  }

  progess () {
    
    // var i= 1;
    // for (i=1;i<100;i+=1){
         
    //      setTimeout( ()=>{this.progressvalue=i}, 5000);
    // };
    // console.log('progress number'+this.progressvalue);
    
    // if(this.progressvalue===100){
    //   this.thanks()
    // }

  }

  onSubmit(): void {
    if(this.form.valid){
      console.log(this.form.value);
      this.contactservice.addcontactForm(this.form.value);
      this.form.reset();
      this.contactservice.initializeFormGroup();
      this.contactservice.getcontactForms().subscribe(x=>{this.savedcontact=x});
      console.log(this.savedcontact);
      this.dialogRef.close();
      this.thanks()
      // this.progess()
      
      
      
      
      }
}
}


