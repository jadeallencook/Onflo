import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveSolutionsComponent } from './active-solutions.component';

describe('ActiveSolutionsComponent', () => {
  let component: ActiveSolutionsComponent;
  let fixture: ComponentFixture<ActiveSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveSolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
