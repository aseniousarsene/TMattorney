import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { profile } from '../shared/profile.model';
import { ProfileServiceService } from '../home/profile-service.service';

@Component({
  selector: 'app-teamprofile',
  templateUrl: './teamprofile.component.html',
  styleUrls: ['./teamprofile.component.css']
})
export class TeamprofileComponent implements OnInit {

  profile:profile

  constructor(@Inject(MAT_DIALOG_DATA) public data: any , private profileservice : ProfileServiceService) { }

  ngOnInit(): void {
    console.log('hey there this data arrived:' + this.data.id);

    this.profile = this.profileservice.getaprofile(this.data.id);

    console.log('you have your profile'+this.profile.name)
  }

}
