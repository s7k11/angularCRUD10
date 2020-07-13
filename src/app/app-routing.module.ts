import { NgModule } from '@angular/core';


import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { UserDashboradComponent } from './user/user-dashborad/user-dashborad.component';


const routes: Routes = [
  { path: '', component: Component1Component },
  {
    path: 'component2', component: Component2Component,
    children:[
      {path:'component3',component:Component3Component},
      {path:'userDashboard/:username/:password',component:UserDashboradComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
