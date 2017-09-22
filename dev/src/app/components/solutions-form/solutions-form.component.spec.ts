import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsFormComponent } from './solutions-form.component';

describe('SolutionsFormComponent', () => {
  let component: SolutionsFormComponent;
  let fixture: ComponentFixture<SolutionsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
