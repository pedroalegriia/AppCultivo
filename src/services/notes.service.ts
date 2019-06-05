import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';



@Injectable()
export class NotesService{

    constructor(public afDB: AngularFireDatabase){}
    notes = [];

    public getNotes() {
        return this.afDB.list('notas/');
    }
    public getNote(id){
        return this.afDB.object('notas/'+id);
    }
    public createNote(note){
        this.afDB.database.ref('notas/'+note.id).set(note);
    }
    public editNote(note){
        this.afDB.database.ref('notas/'+note.id).set(note);
    }
    public deleteNote(note){
        this.afDB.database.ref('notas/'+note.id).remove();
    }
}
