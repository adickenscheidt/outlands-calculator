import { createAction, props } from '@ngrx/store';
import { Build } from 'src/app/shared/build';

export const initBuild = createAction('[Builds] Init Build States');
export const newBuild = createAction('[Builds] New Build');
export const saveBuild = createAction('[Builds] Save Build');
export const deleteBuild = createAction('[Builds] Delete Build');
export const loadBuild = createAction('[Builds] Load Build', props<{ id: string }>());
export const cancelBuildEdit = createAction('[Builds] Cancel Current Build');
export const activeBuildChanged = createAction('[Builds] Active Build Changed', props<{build: Build}>());
