import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheatSheetViewComponent } from './cheat-sheet-view.component';

describe('CheatSheetViewComponent', () => {
  let component: CheatSheetViewComponent;
  let fixture: ComponentFixture<CheatSheetViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheatSheetViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheatSheetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
