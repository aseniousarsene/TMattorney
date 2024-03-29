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
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { } from '@angular/fire';
import {} from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ThankyouComponent } from './contact/thankyou/thankyou.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DebtcollectionComponent,
    DatapurificationComponent,
    PropertyandconeyancingComponent,
    ServicesComponent,
    TeamprofileComponent,
    ContactComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule,
    MdbCarouselModule,
    ReactiveFormsModule,

    provideFirebaseApp(() => initializeApp( environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
  
    
  
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
