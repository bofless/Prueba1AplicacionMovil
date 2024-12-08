import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AloPage } from './alo.page';

describe('AloPage', () => {
  let component: AloPage;
  let fixture: ComponentFixture<AloPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
