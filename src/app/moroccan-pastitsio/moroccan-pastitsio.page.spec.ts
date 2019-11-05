import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoroccanPastitsioPage } from './moroccan-pastitsio.page';

describe('MoroccanPastitsioPage', () => {
  let component: MoroccanPastitsioPage;
  let fixture: ComponentFixture<MoroccanPastitsioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoroccanPastitsioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoroccanPastitsioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
