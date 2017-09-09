import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APagarEnEstacionamientoComponent } from './apagar-en-estacionamiento.component';

describe('APagarEnEstacionamientoComponent', () => {
  let component: APagarEnEstacionamientoComponent;
  let fixture: ComponentFixture<APagarEnEstacionamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APagarEnEstacionamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APagarEnEstacionamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
