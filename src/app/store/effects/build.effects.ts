import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

@Injectable()
export class BuildEffects {
  constructor(private actions$: Actions) {}
}
