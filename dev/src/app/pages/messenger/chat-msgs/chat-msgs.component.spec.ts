import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMsgsComponent } from './chat-msgs.component';

describe('ChatMsgsComponent', () => {
  let component: ChatMsgsComponent;
  let fixture: ComponentFixture<ChatMsgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatMsgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatMsgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
