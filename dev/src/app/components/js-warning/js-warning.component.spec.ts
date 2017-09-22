import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsWarningComponent } from './js-warning.component';

describe('JsWarningComponent', () => {
  let component: JsWarningComponent;
  let fixture: ComponentFixture<JsWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
