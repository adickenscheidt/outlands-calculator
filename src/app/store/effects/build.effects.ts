import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, ROOT_EFFECTS_INIT, createEffect } from '@ngrx/effects';
import { initBuild } from '../actions/build.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class BuildEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  public init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      map(a => initBuild())
    )
  );
}
