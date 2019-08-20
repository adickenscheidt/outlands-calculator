import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildEvaluationResultComponent } from './build-evaluation-result.component';

describe('BuildEvaluationResultComponent', () => {
  let component: BuildEvaluationResultComponent;
  let fixture: ComponentFixture<BuildEvaluationResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildEvaluationResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildEvaluationResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
