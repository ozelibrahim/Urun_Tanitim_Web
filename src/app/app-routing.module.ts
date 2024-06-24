import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './admin/components/login/login.component';
import { AdvertComponent } from './admin/components/advert/advert.component';

const routes: Routes = [

  {
    path:"",component:HomeComponent,children:[
    ]
  },
  {
    path:"admin",component:LayoutComponent,children:[
      { path: "", component: DashboardComponent, canActivate: [AuthGuard]},
      { path: "login", component: LoginComponent},
      { path: "advert", component: AdvertComponent,canActivate: [AuthGuard]},


      // { path: "", component: DashboardComponent, canActivate: [AuthGuard] },

    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


  
 }
