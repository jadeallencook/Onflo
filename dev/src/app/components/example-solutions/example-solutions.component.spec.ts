import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSolutionsComponent } from './example-solutions.component';

describe('ExampleSolutionsComponent', () => {
  let component: ExampleSolutionsComponent;
  let fixture: ComponentFixture<ExampleSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleSolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
