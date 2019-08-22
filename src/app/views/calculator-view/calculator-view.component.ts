import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { Build } from 'src/app/shared/build';
import { saveBuild, newBuild, deleteBuild } from 'src/app/store/actions/build.actions';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-calculator-view',
  templateUrl: './calculator-view.component.html',
  styleUrls: ['./calculator-view.component.scss']
})
export class CalculatorViewComponent implements OnInit {

  constructor(private store: Store<State>) {}

  ngOnInit() {}

  public newBuild() {
    this.store.dispatch(newBuild());
  }

  public deleteBuild() {
    this.store.dispatch(deleteBuild());
  }
}
