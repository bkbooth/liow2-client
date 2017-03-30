import { Action } from '@ngrx/store';

import { actionType, ApiError } from '../../utils';
import * as fromGroupsControlPanel from './groups.reducer';
import { Group } from '../../group';

export class ActionTypes {
  static readonly INITIALISE = actionType('[Groups Control Panel] Initialise');
  static readonly LOAD_GROUPS = actionType('[Groups Control Panel] Load Groups');
  static readonly LOAD_GROUPS_FAIL = actionType('[Groups Control Panel] Load Groups Fail');
  static readonly LOAD_GROUPS_SUCCESS = actionType('[Groups Control Panel] Load Groups Success');
  static readonly UPDATE_QUERY = actionType('[Groups Control Panel] Update Query');
  static readonly UPDATE_PAGE = actionType('[Groups Control Panel] Update Page');
}

export class InitialiseAction implements Action {
  type = ActionTypes.INITIALISE;

  constructor(
    public payload: { query: string, page: number } = { query: '', page: 1 },
  ) { }
}

export class LoadGroupsAction implements Action {
  type = ActionTypes.LOAD_GROUPS;

  constructor(
    public payload: fromGroupsControlPanel.State,
  ) { }
}
export class LoadGroupsFailAction implements Action {
  type = ActionTypes.LOAD_GROUPS_FAIL;

  constructor(
    public payload: ApiError,
  ) { }
}
export class LoadGroupsSuccessAction implements Action {
  type = ActionTypes.LOAD_GROUPS_SUCCESS;

  constructor(
    public payload: { groups: Group[], numberOfGroups: number },
  ) { }
}

export class UpdateQueryAction implements Action {
  type = ActionTypes.UPDATE_QUERY;

  constructor(
    public payload: string,
  ) { }
}

export class UpdatePageAction implements Action {
  type = ActionTypes.UPDATE_PAGE;

  constructor(
    public payload: number,
  ) { }
}

export type Actions
  = InitialiseAction
  | LoadGroupsAction
  | LoadGroupsFailAction
  | LoadGroupsSuccessAction
  | UpdateQueryAction
  | UpdatePageAction
  ;