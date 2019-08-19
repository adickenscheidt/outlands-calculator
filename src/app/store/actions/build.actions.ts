import { createAction, props } from '@ngrx/store';
import { Build } from 'src/app/shared/build';

export const newBuild = createAction('[Builds] New Build');
export const saveBuild = createAction('[Builds] Save Build', props<Build>());
export const deleteBuild = createAction('[Builds] Delete Build', props<{ id: string }>());
export const loadBuild = createAction('[Builds] Load Build', props<{ id: string }>());
