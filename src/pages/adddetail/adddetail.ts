import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NotesService } from '../../services/notes.service';

@IonicPage()
@Component({
  selector: 'page-adddetail',
  templateUrl: 'adddetail.html',
})
export class AdddetailPage {
  note:any = {id: null, nombre: null };
  id = null;
  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams, public notesService: NotesService ) {
    this.id = navParams.get('id');
    if(this.id !=0){
      notesService.getNote(this.id).valueChanges().subscribe( note =>{
        this.note = note;});
    }
  }

  //agregamos datos
  addNote(){
    if(this.id !=0){
      this.notesService.editNote(this.note);
      alert('Modificacion exitosa');
    }else{
      this.note.id = Date.now();
      this.notesService.createNote(this.note);
      alert('Dato guardado');
    }
    this.navCtrl.pop();
  }
  //eliminamos datos
deleteNote(){
  this.notesService.deleteNote(this.note);
  alert('Eliminado con exito');
  this.navCtrl.pop();
}


showConfirm(){
    const confirm = this.alertCtrl.create({
      title: 'Eliminar?',
      message: 'Deseas eliminar registro?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('funcion cancelado');
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            console.log('Elemento eliminado');
          }
        }
      ]
    });
    confirm.present();
  }
}

/**
  addProductor(){
    if(this.id != 0){
      this.productorServices.editproductor(this.productor);
      alert('Modificacion exitosa')
    }else{
      this.productor.id= Date.now();
      this.productorServices.createproductor(this.productor);
      alert('Guardado con exito');
    }
    this.navCtrl.pop();
  }
  */
/**
  deleteProductor(){
    this.productorServices.deleteproductor(this.productor);
    alert('Productor eliminado con exito');
    this.navCtrl.pop();

  }
  */
