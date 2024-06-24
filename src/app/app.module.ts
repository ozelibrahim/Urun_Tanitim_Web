import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { LayoutModule } from './admin/layout/layout.module';
import { AdminModule } from './admin/admin.module';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { } from '@angular/fire/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDcRDYxjN073DqKrU-Ui1Ag_WTkAjy1exI",
  authDomain: "bets-link.firebaseapp.com",
  projectId: "bets-link",
  storageBucket: "bets-link.appspot.com",
  messagingSenderId: "962576977939",
  appId: "1:962576977939:web:bdbd33559638b1368a6fe6"
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    
    LayoutModule,//admin
    AdminModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
