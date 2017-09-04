import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsCapicuaComponent } from './es-capicua.component';

describe('EsCapicuaComponent', () => {
  let component: EsCapicuaComponent;
  let fixture: ComponentFixture<EsCapicuaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsCapicuaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsCapicuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
