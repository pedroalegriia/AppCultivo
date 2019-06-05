import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { NotesService } from '../../services/registros.service';


@IonicPage()
@Component({
  selector: 'page-subcategorias',
  templateUrl: 'subcategorias.html',
})
export class SubcategoriasPage {
//  registro:any = {};
//  id = null;

  constructor(public navCtrl: NavController){
    //public registrosService: RegistrosService) {
  /**  registrosService.getRegistros().valueChanges().
    subscribe( registros => {
          console.log(registros)
         this.registros = registro;
     });﻿
     */
  }
  //agregamos datos
  /**
  addNote(){
    if(this.id !=0){
      this.registrosService.editRegistro(this.registro);
      alert('Modificacion exitosa');
    }else{
      this.note.id = Date.now();
      this.registrosService.createRegistro(this.registro);
      alert('Dato guardado');
    }
    this.navCtrl.pop();
  }
  //eliminamos datos
deleteNote(){
  this.registrosService.deleteRegistro(this.registro);
  alert('Eliminado con exito');
  this.navCtrl.pop();
}
*/
}
