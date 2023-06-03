import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPessoaComponent } from './view-pessoa.component';

describe('ViewPessoaComponent', () => {
  let component: ViewPessoaComponent;
  let fixture: ComponentFixture<ViewPessoaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPessoaComponent]
    });
    fixture = TestBed.createComponent(ViewPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
