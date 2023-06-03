import { Injectable } from "@angular/core";
import { Pessoa } from "../models/pessoa";

import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from "rxjs";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private dbPath = '/pessoas';

  pessoasRef: AngularFirestoreCollection<Pessoa>;

  constructor(private db: AngularFirestore) {
    this.pessoasRef = db.collection(this.dbPath);
  }

  public getAllPessoas(): AngularFirestoreCollection<Pessoa> {
    return this.pessoasRef;
  }

  public deletePessoaById(id: string): Promise<void> {
    return this.pessoasRef.doc(id).delete();
  }

  updatePessoa(id: string, data: any): Promise<void> {
    return this.pessoasRef.doc(id).update(data);
  }

  public getPessoaDetailById(id: string): any {
    return this.pessoasRef.doc(id).get();
  }

  public savePessoa(pessoa: Pessoa): any {
    return this.pessoasRef.add({ ...pessoa });
  }

}
