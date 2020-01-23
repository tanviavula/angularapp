import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ipl2020Component } from './ipl2020.component';

describe('Ipl2020Component', () => {
  let component: Ipl2020Component;
  let fixture: ComponentFixture<Ipl2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ipl2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ipl2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
