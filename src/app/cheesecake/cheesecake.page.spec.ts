import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheesecakePage } from './cheesecake.page';

describe('CheesecakePage', () => {
  let component: CheesecakePage;
  let fixture: ComponentFixture<CheesecakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheesecakePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheesecakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
