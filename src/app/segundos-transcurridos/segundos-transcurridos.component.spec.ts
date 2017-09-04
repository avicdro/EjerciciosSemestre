import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundosTranscurridosComponent } from './segundos-transcurridos.component';

describe('SegundosTranscurridosComponent', () => {
  let component: SegundosTranscurridosComponent;
  let fixture: ComponentFixture<SegundosTranscurridosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundosTranscurridosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundosTranscurridosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
