import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatToCodeComponent } from './chat-to-code.component';

describe('ChatToCodeComponent', () => {
  let component: ChatToCodeComponent;
  let fixture: ComponentFixture<ChatToCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatToCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatToCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
