import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ComponentsModule { }
