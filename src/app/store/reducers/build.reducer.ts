import { aspects } from './../../shared/aspects';
import { skills } from './../../shared/skills';
import { Action, createReducer, on } from '@ngrx/store';
import { Build } from 'src/app/shared/build';
import * as buildActions from 'src/app/store/actions/build.actions';
import { Guid } from 'guid-typescript';

export const buildFeatureKey = 'build';

export interface BuildState {
  activeBuildId: string;
  builds: Build[];
}

export const initialState: BuildState = {
  activeBuildId: null,
  builds: []
};

const buildReducer = createReducer(
  initialState,
  on(buildActions.newBuild, state => {
    const id = Guid.create().toString();
    const newBuild = { id, str: 0, dex: 0, int: 0, skills: [] };
    return { ...state, activeBuildId: newBuild.id, builds: [newBuild, ...state.builds] };
  }),
  on(buildActions.saveBuild, (state, saveBuildAction) => ({
    ...state,
    builds: state.builds.map(b => {
      if (b.id === saveBuildAction.id) {
        return saveBuildAction;
      } else {
        return b;
      }
    })
  })),
  on(buildActions.deleteBuild, (state, deleteAction) => {
    const newArr = state.builds.filter(b => b.id !== deleteAction.id);
    const newActiveBuildId = newArr.length > 0 ? newArr[0].id : null;
    return { ...state, builds: newArr, activeBuildId: newActiveBuildId };
  }),
  on(buildActions.loadBuild, (state, action) => ({ ...state, activeBuildId: action.id }))
);

export function reducer(state: BuildState | undefined, action: Action) {
  return buildReducer(state, action);
}
