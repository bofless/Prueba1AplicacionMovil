import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DepartamentosPage } from './departamentos.page';

describe('DepartamentosPage', () => {
  let component: DepartamentosPage;
  let fixture: ComponentFixture<DepartamentosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
