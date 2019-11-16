import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesilloPage } from './quesillo.page';

describe('QuesilloPage', () => {
  let component: QuesilloPage;
  let fixture: ComponentFixture<QuesilloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuesilloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuesilloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
