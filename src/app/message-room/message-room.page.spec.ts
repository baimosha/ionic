import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageRoomPage } from './message-room.page';

describe('MessageRoomPage', () => {
  let component: MessageRoomPage;
  let fixture: ComponentFixture<MessageRoomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageRoomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageRoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
