import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class RegistroService{

    constructor(public afDB: AngularFireDatabase){}
    registros = [];

    public getRegistros() {
        return this.afDB.list('registros/');
    }
    public getRegistro(id){
        return this.afDB.object('registros/'+id);
    }
    public createRegistro(registro){
        this.afDB.database.ref('registros/'+registro.id).set(registro);
    }
    public editRegistro(registro){
        this.afDB.database.ref('registros/'+registro.id).set(registro);
    }
    public deleteRegistro(registro){
        this.afDB.database.ref('registros/'+registro.id).remove();
    }
}
