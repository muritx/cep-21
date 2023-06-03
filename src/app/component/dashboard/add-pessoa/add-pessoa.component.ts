import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { NgForm } from '@angular/forms';
import { Pessoa } from 'src/app/models/pessoa';
import { Router } from '@angular/router';
import { PessoaService } from 'src/app/services/pessoa-service';

@Component({
  selector: 'app-add-pessoa',
  templateUrl: './add-pessoa.component.html',
  styleUrls: ['./add-pessoa.component.css']
})
export class AddPessoaComponent implements OnInit {
  addPessoaForm: Pessoa = new Pessoa();

  @ViewChild("Pessoa")
  Pessoa!: NgForm;
  isSubmitted: boolean = false;

  constructor(private router: Router, private pessoaService: PessoaService) {}

  ngOnInit(): void {

  }

  AddPessoa(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.pessoaService.savePessoa(this.addPessoaForm)
        .then(() => {
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 500);
          console.log('Created new item successfully!');
        })
        .catch((error: any) => {
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 500);
        });
    }
  }

  newPessoa(): void {
    this.isSubmitted = false;
    this.addPessoaForm = new Pessoa();
    
  }
}
