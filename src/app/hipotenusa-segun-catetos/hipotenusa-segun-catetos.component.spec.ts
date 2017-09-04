import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HipotenusaSegunCatetosComponent } from './hipotenusa-segun-catetos.component';

describe('HipotenusaSegunCatetosComponent', () => {
  let component: HipotenusaSegunCatetosComponent;
  let fixture: ComponentFixture<HipotenusaSegunCatetosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HipotenusaSegunCatetosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HipotenusaSegunCatetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
