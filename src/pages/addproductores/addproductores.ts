import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AdddetailPage } from '../adddetail/adddetail';
import { NotesService } from '../../services/notes.service';


@IonicPage()
@Component({
  selector: 'page-addproductores',
  templateUrl: 'addproductores.html',
})
export class AddproductoresPage {
  //array notes
  notes = [];
  //polimorfismo ViewChild
   @ViewChild('myNav') nav: NavController;
   //constructor para iniciar el service
  constructor(public navCtrl: NavController, public notesService: NotesService) {
      notesService.getNotes().valueChanges().
      subscribe( notas => {
            console.log(notas)
           this.notes = notas;
       });﻿
    }
    //entramos a la page de goToDatail con el id
     goToDatail(id){
         this.navCtrl.push(AdddetailPage, {id:id});
     }
   //entramos a la page de createNote en el array 0
     createNote(){
         this.navCtrl.push(AdddetailPage, {id:0});
     }
    
  }
