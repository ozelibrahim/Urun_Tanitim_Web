import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './../admin/layout/layout.module';
import { ComponentsModule } from './../admin/components/components.module';
import { FirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    ComponentsModule,
    FirestoreModule,
    FormsModule
  ]
})
export class AdminModule { }
