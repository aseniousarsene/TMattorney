import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef< ThankyouComponent>) { }

  ngOnInit(): void {
  }
close(){
  this.dialogRef.close();
}
}
