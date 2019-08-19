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
  public build$ = this.store.select(s => s.build);
  public currentBuild$ = this.build$.pipe(
    map(b => {
      if (!!b.activeBuildId) {
        return b.builds.find(build => build.id === b.activeBuildId);
      }
      return null;
    }),
    tap(s => console.log(s))
  );

  constructor(private store: Store<State>) {}

  ngOnInit() {}

  public buildSaved(build: Build) {
    this.store.dispatch(saveBuild(build));
  }

  public newBuild() {
    this.store.dispatch(newBuild());
  }

  public deleteBuild(id: string) {
    this.store.dispatch(deleteBuild({ id }));
  }
}
