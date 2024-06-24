import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdvertComponent } from './advert/advert.component';



@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    AdvertComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    
  ]
})
export class ComponentsModule { }
