import { Injectable } from '@angular/core';
import { profile } from '../shared/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  profiles:profile[] = [{id:1,name:"Peter Tsotetsi",title:"Managing Director",picturelink:"assets/images/peter7.png"
                          ,description:"gygygygy jhuhuhu iuihuhuh nuu"
                         ,linkedin:"nijij",twiter:"jij",phone:8},

                         {id:2,name:"Stanley Mohapi",title:"Call Center Manager",picturelink:"assets/images/stan.png",
                         description:"djhfujhfudfnuijfuijfnuie"
                          ,linkedin:"jdijuieji",twiter:"ejijiefj",phone:29},

                          {id:3,name:"David Mothobi",title:"Field Agent",picturelink:"assets/images/david-meh.png",
                          description:"jfjfiirufjruijfirjfirjfi"
                            ,linkedin:"jfjfjfk",twiter:"hfuhfur",phone:990},

                            {id:4,name:"Teboho Masela",title:"Field Agent",picturelink:"assets/images/tebza-meh2.png",
                            description:"HFUDHFUDHFUHDFUHUJ"
                              ,linkedin:"hyuhyu",twiter:"vftr",phone:787}

                              ]

  constructor() { }

getprofile() {
  return this.profiles.slice()
}

getaprofile(id:number) {
  return this.profiles.find(profile=>profile.id===id)
}

}
