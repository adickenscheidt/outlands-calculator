import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuffTimerViewComponent } from './buff-timer-view.component';

describe('BuffTimerViewComponent', () => {
  let component: BuffTimerViewComponent;
  let fixture: ComponentFixture<BuffTimerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuffTimerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuffTimerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
