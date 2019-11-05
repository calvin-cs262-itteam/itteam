import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PretzelPage } from './pretzel.page';

describe('PretzelPage', () => {
  let component: PretzelPage;
  let fixture: ComponentFixture<PretzelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PretzelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PretzelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
