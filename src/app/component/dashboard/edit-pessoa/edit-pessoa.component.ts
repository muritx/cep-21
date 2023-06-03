import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from 'src/app/services/pessoa-service';

@Component({
  selector: 'app-edit-pessoa',
  templateUrl: './edit-pessoa.component.html',
  styleUrls: ['./edit-pessoa.component.css']
})
export class EditPessoaComponent implements OnInit {
  @Input() pessoa?: Pessoa;

  editPessoaForm: Pessoa = {
    cpf: '',
    nome: '',
    nascimento: undefined,
    sexo: '',
    email: '',
    celular: undefined,
  }

  message = '';

  @ViewChild("Pessoa")
  Pessoa!: NgForm;

  isSubmitted: boolean = false;
  pessoaId: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pessoaService: PessoaService
  ) { }

  ngOnInit(): void {
    this.pessoaId = this.route.snapshot.params['pessoaId'];
    this.getPessoaDetailById(this.pessoaId);
  }

  getPessoaDetailById(pessoaId: string) {
    this.pessoaService.getPessoaDetailById(pessoaId).subscribe(
      (resultData: any) => {
        if (resultData) {
          this.pessoa = resultData.data(); // Assuming resultData is a DocumentSnapshot
          this.editPessoaForm = { ...this.pessoa };
        }
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  EditPessoa(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.pessoaService.updatePessoa(this.pessoaId, this.editPessoaForm).then(() => {
        //this.toastr.success('Employee updated successfully');
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 500);
      })
        .catch((error: any) => {
          //this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 500);
        });
    }
  }
}
