import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PessoaService } from 'src/app/services/pessoa-service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ng-modal-confirm',
  template: `
  <div class="modal-header">
    <h5 class="modal-title" id="modal-title">Delete Confirmation</h5>
    <button type="button" class="btn close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">×</span>
    </button>
  </div>
  <div class="modal-body">
    <p>Tem certeza de que deseja deletar?</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">CANCEL</button>
    <button type="button" ngbAutofocus class="btn btn-success" (click)="modal.close('Ok click')">OK</button>
  </div>
  `,
})
export class NgModalConfirm {
  constructor(public modal: NgbActiveModal) { }
}

export const MODALS = {
  deleteModal: NgModalConfirm,
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  closeResult = '';
  listaPessoas: any = [];

  constructor(private router: Router, private modalService: NgbModal, private pessoaService: PessoaService) {}

  ngOnInit(): void {
      this.getAllPessoas();
  }

  getAllPessoas(): void {
    this.pessoaService.getAllPessoas().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.listaPessoas = data;
    });
  }

  AddPessoa() {
    this.router.navigate(['create']);
  }

  deletePessoaConfirmation(pessoa: any) {
    this.modalService.open(MODALS['deleteModal'],
    {
      ariaLabelledBy: 'modal-basic-title'
    }).result.then((result) => {
      this.deletePessoa(pessoa);
    },
    (reason) => {});
  }

  deletePessoa(pessoa: any) {
    this.pessoaService.deletePessoaById(pessoa.id).then(() => {
      //this.toastr.success('Employee deleted successfully');
      this.getAllPessoas();
    }).catch((error: any) => {
      console.log(error);
    })

  }

}
