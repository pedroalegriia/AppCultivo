import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  usuario: string;
    password: string;

    readonly APP_USERNAME: string = 'admin';
    readonly APP_PASSWORD: string = '123';

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  principal(){
      this.navCtrl.setRoot(TabsPage);
    }

    login() {
      let alert = this.alertCtrl.create({
        title: 'Acceso denegado',
        subTitle: 'Usuario y/o contraseña incorrecto.',
        buttons: ['OK']
      });

      if (this.usuario == this.APP_USERNAME && this.password == this.APP_PASSWORD) {
        this.navCtrl.setRoot(TabsPage);
      } else {
        alert.present();
      }
      this.usuario = '';
      this.password = '';
    }
}
