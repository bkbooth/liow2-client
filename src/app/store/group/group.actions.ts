import { Action } from '@ngrx/store';

import { actionType, ApiError, SearchParams } from '../utils';
import { NewGroup, Group, GroupTab } from './index';

export class ActionTypes {
  static readonly COUNT = actionType('[Group] Count');
  static readonly COUNT_FAIL = actionType('[Group] Count Fail');
  static readonly COUNT_SUCCESS = actionType('[Group] Count Success');
  static readonly CREATE = actionType('[Group] Create');
  static readonly CREATE_FAIL = actionType('[Group] Create Fail');
  static readonly CREATE_SUCCESS = actionType('[Group] Create Success');
  static readonly FIND_AND_SET_CURRENT = actionType('[Group] Find and Set Current');
  static readonly FIND_AND_SET_CURRENT_FAIL = actionType('[Group] Find and Set Current Fail');
  static readonly SET_CURRENT = actionType('[Group] Set Current');
  static readonly SET_CURRENT_TAB = actionType('[Group] Set Current Tab');
  static readonly UPDATE = actionType('[Group] Update');
  static readonly UPDATE_FAIL = actionType('[Group] Update Fail');
  static readonly UPDATE_SUCCESS = actionType('[Group] Update Success');
}

export class CountAction implements Action {
  type = ActionTypes.COUNT;
}
export class CountFailAction implements Action {
  type = ActionTypes.COUNT_FAIL;

  constructor(
    public payload: any,
  ) { }
}
export class CountSuccessAction implements Action {
  type = ActionTypes.COUNT_SUCCESS;

  constructor(
    public payload: number,
  ) { }
}

export class CreateAction implements Action {
  type = ActionTypes.CREATE;

  constructor(
    public payload: { group: NewGroup, setupCampaign: boolean },
  ) { }
}
export class CreateFailAction implements Action {
  type = ActionTypes.CREATE_FAIL;

  constructor(
    public payload: ApiError,
  ) { }
}
export class CreateSuccessAction implements Action {
  type = ActionTypes.CREATE_SUCCESS;

  constructor(
    public payload: Group,
  ) { }
}

export class FindAndSetCurrentAction implements Action {
  type = ActionTypes.FIND_AND_SET_CURRENT;

  constructor(
    public payload: SearchParams,
  ) { }
}
export class FindAndSetCurrentFailAction implements Action {
  type = ActionTypes.FIND_AND_SET_CURRENT_FAIL;

  constructor(
    public payload: string,
  ) { }
}

export class SetCurrentAction implements Action {
  type = ActionTypes.SET_CURRENT;

  constructor(
    public payload: Group,
  ) { }
}

export class SetCurrentTabAction implements Action {
  type = ActionTypes.SET_CURRENT_TAB;

  constructor(
    public payload: GroupTab,
  ) { }
}

export class UpdateAction implements Action {
  type = ActionTypes.UPDATE;

  constructor(
    public payload: Group,
  ) { }
}
export class UpdateFailAction implements Action {
  type = ActionTypes.UPDATE_FAIL;

  constructor(
    public payload: ApiError,
  ) { }
}
export class UpdateSuccessAction implements Action {
  type = ActionTypes.UPDATE_SUCCESS;

  constructor(
    public payload: Group,
  ) { }
}

export type Actions
  = CountAction
  | CountFailAction
  | CountSuccessAction
  | CreateAction
  | CreateFailAction
  | CreateSuccessAction
  | FindAndSetCurrentAction
  | FindAndSetCurrentFailAction
  | SetCurrentAction
  | SetCurrentTabAction
  | UpdateAction
  | UpdateFailAction
  | UpdateSuccessAction
  ;
