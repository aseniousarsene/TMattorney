
import { MatDialog, MatDialogConfig } from  '@angular/material/dialog';
import * as $ from 'jquery';
import * as AOS from 'aos';
import { Component, ElementRef, OnInit,Renderer2,ViewChild,AfterViewInit, OnDestroy } from '@angular/core';
// import { Position } from '@angular/compiler';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

import { TeamprofileComponent } from '../teamprofile/teamprofile.component';
import { ProfileServiceService } from './profile-service.service';
import { profile } from '../shared/profile.model';
import { ContactComponent } from '../contact/contact.component';



declare const Waypoint: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // animations: [

  //   trigger('myInsertRemoveTrigger', [
  //     transition(':enter', [
  //       style({ opacity: 0 }),
  //       animate('100ms', style({ opacity: 1 })),
  //     ]),
  //     transition(':leave', [
  //       animate('100ms', style({ opacity: 0 }))
  //     ])
  //   ]),
  // ]
  animations: [
    trigger('enterTrigger', [
    state('fadeIn', style({
        opacity: '1',
        transform: 'translateX(0%)'
        
    })),
    state('fadeInleft', style({
      opacity: '1',
      transform: 'translateX(0%)'
      
  })),
    transition('void => fadeIn', [style({opacity: '0',transform: 'translateX(-20%)'}), animate('200ms')]),
    transition('void => fadeInleft', [style({opacity: '0',transform: 'translateX(20%)'}), animate('200ms')]),
    ])
  ]
})

export class HomeComponent implements OnInit,OnDestroy{
 @ViewChild('header',) headerElement: ElementRef;
 @ViewChild('service',) serviceElement: ElementRef;
 @ViewChild('team',) teamElement: ElementRef;
 @ViewChild('about',) aboutElement: ElementRef;
 @ViewChild('float') butfloat!: ElementRef;
 headersection:number;
 servicesection:number;
 teamsection:number;
 aboutsection:number;
 scroll :number=0;
 selected = false;
 profiles:profile[];
 listener:any;
 cardNumber=1;
 number=1;
 ret=1
 left:boolean=false
//  sticky =true

  // constructor(private dialog: MatDialog,private renderer:Renderer2) { };

  constructor(

    private matdialog:MatDialog, private renderer:Renderer2, private profileservice:ProfileServiceService)
    {};

  ngOnInit(){

    AOS.init();

    this.listener=this.renderer.listen(window,'scroll',($event)=> {
         this.scroll = window.scrollY;
         console.log(this.scroll );
         if (window.scrollY > 800) {
          this.butfloat.nativeElement.classList.add('floating');
    
        } else {
          this.butfloat.nativeElement.classList.remove('floating');
    
          }
    });

    this.profiles = this.profileservice.getprofile();
    console.log(this.profiles);
    // const notify = (message)=>{
    //   const $message = $('<p style="display:none;">' + message + '</p>');

    //   $('.notifications').append($message);
    //   $message.slideDown(500,()=>{
    //     window.setTimeout(() =>{
    //       $message.slideUp(500,()=>{
    //         $message.remove();
    //       });
    //     }, 2000);
    //   });
    // };
 //waypoints
 const grinner = new Waypoint({
  element: document.getElementById('homeservices'),

  handler: (direction:any) => {
    if (direction == 'down'){
      $('nav').addClass('sticky');
      // this.sticky=true

    } else {
      $('nav').removeClass('sticky');
    };
    },
    offset: '18%',


});
// carousel
var terms = ["You can now make your paymenet using e-tshwane portail", "Make sure you make your payment each month as per arrangement", "You can can contact us for any query"];

function rotateTerm() {
  var ct = $("#rotate").data("term") || 0;
  $("#rotate").data("term", ct == terms.length -1 ? 0 : ct + 1).text(terms[ct]).fadeIn()
              .delay(6000).fadeOut(200, rotateTerm);
}
$(rotateTerm);

}

ngAfterViewInit(){

  this.headersection = (this.headerElement.nativeElement.offsetTop)
  console.log('the header section is at '+this.headersection);

  this.servicesection = (this.serviceElement.nativeElement.offsetTop-100)
  console.log('the service section is at '+this.servicesection);

  this.teamsection = (this.teamElement.nativeElement.offsetTop-30)
  console.log('the team  is at '+this.teamsection);

  this.aboutsection = (this.aboutElement.nativeElement.offsetTop-30)
  console.log('the about is at '+this.aboutsection)
}



onClick(id:number): void {
  console.log('this the id number :' + id);
  const dialogConfig = new MatDialogConfig ();
  dialogConfig.disableClose =false;
  dialogConfig.autoFocus=true ;
  dialogConfig.panelClass='dialog-responsive';
  dialogConfig.data={id:id};

//   dialogConfig.width='60%';
  this.matdialog.open(TeamprofileComponent,dialogConfig);
}
scrollToSection($section): void {
  console.log($section);
  $section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

ngOnDestroy(): void {
  this.listener();
  console.log('listener destroyed')
}

changecardforw(){
  this.number=this.sicleNumberup()
  
  this.left=false
  console.log(this.number);
  
}

changecardback(){
  
  
  this.number=this.sicleNumberdown();
  this.left=true
  
  console.log(this.number);
  
}



  sicleNumberdown(){
   this.cardNumber-=1;
   if(this.cardNumber>3){
     return 1
   }
   if (this.cardNumber<1) {
    return 3
   }
   else {
    return this.cardNumber
   }
}

sicleNumberup(){
  const ret =1
  this.cardNumber+=1;
  
  if(this.cardNumber>3){
    return 1
  }
  if (this.cardNumber<1) {
   return 3
  }
  else {
   return this.cardNumber
  }
}

onRequest(): void {
  const dialogConfig2 = new MatDialogConfig ();
  dialogConfig2.disableClose =false;
  dialogConfig2.autoFocus=true ;
  // dialogConfig2.panelClass='dialog-responsive2';
  dialogConfig2.width='60%';
  this.matdialog.open(ContactComponent,dialogConfig2);
}

}


