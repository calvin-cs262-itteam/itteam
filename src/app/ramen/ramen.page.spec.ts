import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RamenPage } from './ramen.page';

describe('RamenPage', () => {
  let component: RamenPage;
  let fixture: ComponentFixture<RamenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RamenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
