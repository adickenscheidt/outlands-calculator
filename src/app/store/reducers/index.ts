import { environment } from './../../../environments/environment';
import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import * as fromBuild from 'src/app/store/reducers/build.reducer';


export interface State {
    build: fromBuild.BuildState;
}

export const reducers: ActionReducerMap<State> = {
    build: fromBuild.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
