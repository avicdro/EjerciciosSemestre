import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarVueltaANumeroComponent } from './dar-vuelta-anumero.component';

describe('DarVueltaANumeroComponent', () => {
  let component: DarVueltaANumeroComponent;
  let fixture: ComponentFixture<DarVueltaANumeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarVueltaANumeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarVueltaANumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
