import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VelocidadSegunDistanciaTiempoComponent } from './velocidad-segun-distancia-tiempo.component';

describe('VelocidadSegunDistanciaTiempoComponent', () => {
  let component: VelocidadSegunDistanciaTiempoComponent;
  let fixture: ComponentFixture<VelocidadSegunDistanciaTiempoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VelocidadSegunDistanciaTiempoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VelocidadSegunDistanciaTiempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
