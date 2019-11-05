import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EggsBenedictPage } from './eggs-benedict.page';

describe('EggsBenedictPage', () => {
  let component: EggsBenedictPage;
  let fixture: ComponentFixture<EggsBenedictPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EggsBenedictPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EggsBenedictPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
