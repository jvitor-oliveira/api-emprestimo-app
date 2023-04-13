import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirClientesComponent } from './excluir-clientes.component';

describe('ExcluirClientesComponent', () => {
  let component: ExcluirClientesComponent;
  let fixture: ComponentFixture<ExcluirClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
