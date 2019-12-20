import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadChild1Component } from './head-child1.component';

describe('HeadChild1Component', () => {
  let component: HeadChild1Component;
  let fixture: ComponentFixture<HeadChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
