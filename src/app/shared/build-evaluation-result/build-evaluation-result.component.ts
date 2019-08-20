import { Component, OnInit, Input } from '@angular/core';
import { Build } from '../build';

@Component({
  selector: 'app-build-evaluation-result',
  templateUrl: './build-evaluation-result.component.html',
  styleUrls: ['./build-evaluation-result.component.scss']
})
export class BuildEvaluationResultComponent implements OnInit {
  @Input()
  public build: Build;

  constructor() {}

  ngOnInit() {}
}
