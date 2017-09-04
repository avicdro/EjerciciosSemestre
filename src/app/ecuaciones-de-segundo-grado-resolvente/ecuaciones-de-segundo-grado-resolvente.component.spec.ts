import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcuacionesDeSegundoGradoResolventeComponent } from './ecuaciones-de-segundo-grado-resolvente.component';

describe('EcuacionesDeSegundoGradoResolventeComponent', () => {
  let component: EcuacionesDeSegundoGradoResolventeComponent;
  let fixture: ComponentFixture<EcuacionesDeSegundoGradoResolventeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcuacionesDeSegundoGradoResolventeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcuacionesDeSegundoGradoResolventeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
