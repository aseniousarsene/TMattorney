import { Component, ElementRef, OnInit,Renderer2,ViewChild,AfterViewInit,HostListener} from '@angular/core';
import * as $ from 'jquery';
import * as AOS from 'aos';
declare const Waypoint: any;
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent implements OnInit {
  @ViewChild('debt',) debtSection: ElementRef;
  @ViewChild('data',) dataSection: ElementRef;
  @ViewChild('property',) propertySection: ElementRef;
  @ViewChild('litigation',) litigationSection: ElementRef;
  @ViewChild('commercial',) commercialSection : ElementRef;
  @ViewChild('doc',) doc : ElementRef;


  debtsection:number;
  datasection:number;
  propertysection:number;
  litigationsection:number;
  commercialsection:number;
  scroll :number=0;
  selected = false;
  Container;
  cont

  @HostListener('window:scroll',['$event'])

    onWindowScroll(e:Event){
      // this.scroll = window.scrollY;
      this.scroll= window.pageYOffset
          || document.documentElement.scrollTop
          || document.body.scrollTop || 0;
      console.log(this.scroll)

    };

   constructor(private renderer:Renderer2) { }



    // getYPosition(e: Event): number {
    //   return (e.target as Element).scrollTop;}

   ngOnInit(){

    // this.cont = document.getElementById('container');
    // console.log(this.cont)
    // this.cont.addEventListener('scroll', (event) => {
    //   console.log(event);
    //   const n = event.srcElement.scrollingElement.scrollTop;
    //     console.log(n);
    // });

     AOS.init();

//      this.renderer.listen(window,'scroll',($event)=> {
//       this.scroll = window.scrollY;
//       console.log(this.scroll )
//  });



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
  const service = new Waypoint({
   element: document.getElementById('navstick'),

   handler: (direction:any) => {
     if (direction == 'down'){
       $('.nav2').addClass('fixednav');
       $('.logo-on-fix').addClass('logo-on-fix-show');
       $('.talk').addClass('talk-show');

     } else {
       $('.nav2').removeClass('fixednav');
       $('.logo-on-fix').removeClass('logo-on-fix-show');
       $('.talk').removeClass('talk-show');
     };
     },
     // offset: '2px'
 });

 const donut = new Waypoint({
  element: document.getElementById('donut'),

  handler: (direction:any) => {
    if (direction == 'down'){
      $('.action').addClass('donut-segment');
      $('.action').addClass('donut-segment-2 ');

    } else {
      $('.action').removeClass('donut-segment');
      $('.action').removeClass('donut-segment-2');
    };
    },
    offset: '350px'
});

const donut2 = new Waypoint({
  element: document.getElementById('donut'),

  handler: (direction:any) => {
    if (direction == 'down'){
      $('.action2').addClass('donut-segment');
      $('.action2').addClass('donut-segment-3 ');

    } else {
      $('.action2').removeClass('donut-segment');
      $('.action2').removeClass('donut-segment-3');
    };
    },
    offset: '350px'
});

const donut3 = new Waypoint({
  element: document.getElementById('donut'),

  handler: (direction:any) => {
    if (direction == 'down'){
      $('.action3').addClass('donut-segment');
      $('.action3').addClass('donut-segment-4 ');

    } else {
      $('.action3').removeClass('donut-segment');
      $('.action3').removeClass('donut-segment-4');
    };
    },
    offset: '350px'
});

 }



 ngAfterViewInit(){
   this.debtsection = (this.debtSection.nativeElement.offsetTop-15)
   console.log('this section is at '+this.debtsection);

   this.datasection = (this.dataSection.nativeElement.offsetTop-15)
   console.log('this section is at '+this.datasection);

   this.propertysection = (this.propertySection.nativeElement.offsetTop-15)
   console.log('this section is at '+this.propertysection);

   this.litigationsection = (this.litigationSection.nativeElement.offsetTop-15)
   console.log('this section is at '+this.litigationsection);

   this.commercialsection = (this.commercialSection.nativeElement.offsetTop-15)
   console.log('this section is at '+this.commercialsection)

  //  this.doc.nativeElement.addEventListener('scroll', this.scrollEvent, true);





 }

//  onScroll(event) {
//   console.log(event);
//   const n = event.srcElement.scrollingElement.scrollTop;
//     console.log(n);
//  }

//  ngOnDestroy() {
//   this.doc.nativeElement.removeEventListener('scroll', this.scrollEvent, true);
// }

//  scrollEvent = (event: any): void => {

//   const n = event.srcElement.scrollingElement.scrollTop;
//   console.log(n);
//   console.log(this.doc.nativeElement.scrollTop);



// }

}
