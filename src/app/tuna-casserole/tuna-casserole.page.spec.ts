import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TunaCasserolePage } from './tuna-casserole.page';

describe('TunaCasserolePage', () => {
  let component: TunaCasserolePage;
  let fixture: ComponentFixture<TunaCasserolePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TunaCasserolePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TunaCasserolePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
