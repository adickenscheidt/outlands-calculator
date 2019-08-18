import { Action } from '@ngrx/store';

export enum BuildActionTypes {
  LoadBuilds = '[Build] Load Builds',
  
  
}

export class LoadBuilds implements Action {
  readonly type = BuildActionTypes.LoadBuilds;
}


export type BuildActions = LoadBuilds;
