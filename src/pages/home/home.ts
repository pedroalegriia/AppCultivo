import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  categorias(){
    this.navCtrl.push("CategoriasPage");
  }
  subcategorias(){
    this.navCtrl.push("SubcategoriasPage");
  }
  addProductores(){
    this.navCtrl.push("AddproductoresPage");
  }

}
