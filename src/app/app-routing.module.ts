import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DatapurificationComponent } from './services/datapurification/datapurification.component';
import { DebtcollectionComponent } from './services/debtcollection/debtcollection.component';
import { PropertyandconeyancingComponent } from './services/propertyandconeyancing/propertyandconeyancing.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [{path:'',component:HomeComponent},
{path:'services',component:ServicesComponent},
// children:[
//   {path:'debtcollection',component:DebtcollectionComponent},
//   {path:'datapurification',component:DatapurificationComponent},
//   {path:'propertyandconeyancing',component:PropertyandconeyancingComponent},
// ]
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
