import { aspects } from './../../shared/aspects';
import { skills } from './../../shared/skills';
import { Action, createReducer, on } from '@ngrx/store';
import { Build } from 'src/app/shared/build';
import * as buildActions from 'src/app/store/actions/build.actions';
import { Guid } from 'guid-typescript';
import clone from 'lodash-es/clone';
import cloneDeep from 'lodash-es/cloneDeep';

export const buildFeatureKey = 'build';

export interface BuildState {
  activeBuildId: string;
  activeUnsavedBuild: Build;
  builds: Build[];
}

export const initialState: BuildState = {
  activeBuildId: null,
  activeUnsavedBuild: getNewUnsavedBuild(),
  builds: []
};

function getNewUnsavedBuild(): Build {
  return { id: Guid.create().toString(), buildName: 'New build', str: 0, dex: 0, int: 0, skills: [] };
}

const buildReducer = createReducer(
  initialState,
  on(buildActions.initBuild, state => {
    const clonedState: BuildState = cloneDeep(state);
    if (!clonedState.activeBuildId) {
      if (!state.builds.length) {
        const newBuild = getNewUnsavedBuild();
        clonedState.activeBuildId = newBuild.id;
        clonedState.builds.push(newBuild);
      } else {
        clonedState.activeBuildId = clonedState.builds[0].id;
      }
    }
    return { ...clonedState };
  }),
  on(buildActions.newBuild, state => {
    const newBuild = getNewUnsavedBuild();
    return {
      ...state,
      activeBuildId: newBuild.id,
      activeUnsavedBuild: cloneDeep(newBuild),
      builds: [newBuild, ...state.builds]
    };
  }),
  on(buildActions.saveBuild, state => {
    const newBuildClone = cloneDeep(state.activeUnsavedBuild);
    const newBuildsArr = [newBuildClone].concat(
      cloneDeep(state.builds).map(b => {
        if (b.id === state.activeUnsavedBuild.id) {
          return newBuildClone;
        } else {
          return b;
        }
      })
    );
    return {
      ...state,
      builds: newBuildsArr,
      activeUnsavedBuild: cloneDeep(newBuildClone)
    };
  }),
  on(buildActions.deleteBuild, state => {
    const newArr = state.builds.filter(b => b.id !== state.activeUnsavedBuild.id);
    if (newArr.length <= 0) {
      newArr.push(getNewUnsavedBuild());
    }
    const newActiveBuild = newArr[0];
    return {
      ...state,
      builds: cloneDeep(newArr),
      activeBuildId: newActiveBuild.id,
      activeUnsavedBuild: cloneDeep(newActiveBuild)
    };
  }),
  on(buildActions.loadBuild, (state, action) => ({
    ...state,
    activeBuildId: action.id,
    activeUnsavedBuild: cloneDeep(state.builds.find(b => b.id === action.id))
  })),
  on(buildActions.cancelBuildEdit, state => ({
    ...state,
    activeUnsavedBuild: cloneDeep(state.builds.find(b => b.id === state.activeBuildId))
  })),
  on(buildActions.activeBuildChanged, (state, action) => ({ ...state, activeUnsavedBuild: action }))
);

export function reducer(state: BuildState | undefined, action: Action) {
  return buildReducer(state, action);
}
