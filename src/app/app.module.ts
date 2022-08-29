import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DebtcollectionComponent } from './services/debtcollection/debtcollection.component';
import { DatapurificationComponent } from './services/datapurification/datapurification.component';
import { PropertyandconeyancingComponent } from './services/propertyandconeyancing/propertyandconeyancing.component';
import { ServicesComponent } from './services/services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { TeamprofileComponent } from './teamprofile/teamprofile.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DebtcollectionComponent,
    DatapurificationComponent,
    PropertyandconeyancingComponent,
    ServicesComponent,
    TeamprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule,
    MdbCarouselModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
