import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveBuildSelectComponent } from './active-build-select.component';

describe('ActiveBuildSelectComponent', () => {
  let component: ActiveBuildSelectComponent;
  let fixture: ComponentFixture<ActiveBuildSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveBuildSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveBuildSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
