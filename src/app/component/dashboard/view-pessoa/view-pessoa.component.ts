import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from 'src/app/services/pessoa-service';

@Component({
  selector: 'app-view-pessoa',
  templateUrl: './view-pessoa.component.html',
  styleUrls: ['./view-pessoa.component.css']
})
export class ViewPessoaComponent {
  @Input() pessoa?: Pessoa;

  pessoaDetail: any= [];

  @ViewChild("Pessoa")
  Pessoa!: NgForm;

  isSubmitted: boolean = true;
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
          this.pessoaDetail = resultData.data();
        }
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
