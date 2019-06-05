import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//import service note
import { NotesService } from '../services/notes.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { LoginPage } from '../pages/login/login';
import { AdddetailPage } from '../pages/adddetail/adddetail';
import { ReportesPage } from '../pages/reportes/reportes';
//import { SubcategoriasPage  } from '../pages/subcategorias/subcategorias';
import { PerfilPage } from '../pages/perfil/perfil';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

const firebaseConfig = {
  apiKey: "AIzaSyDdvDG06cuB3beHjdmSON70AY3OJIdQhjI",
    authDomain: "appdatos-6bbd0.firebaseapp.com",
    databaseURL: "https://appdatos-6bbd0.firebaseio.com",
    projectId: "appdatos-6bbd0",
    storageBucket: "appdatos-6bbd0.appspot.com",
    messagingSenderId: "123834286714"
};
@NgModule({
  declarations: [
   MyApp,
   ReportesPage,
   LoginPage,
   PerfilPage,
   HomePage,
   AdddetailPage,
   TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig), // imports firebase/app needed for everything
   AngularFireDatabaseModule, // imports firebase/database, only needed for database features
   AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReportesPage,
    LoginPage,
    PerfilPage,
    AdddetailPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    NotesService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}

  ]
})
export class AppModule {}
