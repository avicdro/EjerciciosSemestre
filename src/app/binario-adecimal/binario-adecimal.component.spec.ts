import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinarioADecimalComponent } from './binario-adecimal.component';

describe('BinarioADecimalComponent', () => {
  let component: BinarioADecimalComponent;
  let fixture: ComponentFixture<BinarioADecimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinarioADecimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinarioADecimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
