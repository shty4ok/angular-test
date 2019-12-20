import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadChild2Component } from './head-child2.component';

describe('HeadChild2Component', () => {
  let component: HeadChild2Component;
  let fixture: ComponentFixture<HeadChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
