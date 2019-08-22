import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { loadBuild } from 'src/app/store/actions/build.actions';

@Component({
  selector: 'app-active-build-select',
  templateUrl: './active-build-select.component.html',
  styleUrls: ['./active-build-select.component.scss']
})
export class ActiveBuildSelectComponent implements OnInit {
  public build$ = this.store.select(s => s.build);

  constructor(private store: Store<State>, private fb: FormBuilder) {}

  ngOnInit() {}

  

  public activeBuildChange(id: string) {
    this.store.dispatch(loadBuild({ id }));
  }
}
