import { Action } from '@ngrx/store';
import { Build } from 'src/app/shared/build';

export const buildFeatureKey = 'build';

export interface BuildState {
  activeBuildId: string;
  build: Build;
}

export const initialState: BuildState = {
  activeBuildId: null,
  build: null
};

export function reducer(state = initialState, action: Action): BuildState {
  switch (action.type) {
    default:
      return state;
  }
}
