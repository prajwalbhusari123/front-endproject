import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { DashboardComponent } from './Entry/dashboard/dashboard.component';
import { HomeCommpComponent } from './home-commp/home-commp.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path:'' , component:HomeCommpComponent, pathMatch:'full'},
  {path:'home', component:HomeCommpComponent},
  {path:'login' ,component:LoginPageComponent},
  {path:'dash', component:DashboardComponent, 
  children:[
    {
      path:'re', loadChildren:()=>import('src/app/Module/remoudule/remoudule.module').then(module=>module.RemouduleModule)
    },
    {
      path:'oe', loadChildren:()=>import('src/app/Module/oemoudule/oemoudule.module').then(module=>module.OemouduleModule)
    },
    {
      path:'cm', loadChildren:()=>import('src/app/Module/cmmoudule/cmmoudule.module').then(module=>module.CmmouduleModule)
    },
    {
      path:'ah', loadChildren:()=>import('src/app/Module/acmoudule/acmoudule.module').then(module=>module.AcmouduleModule)
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
