import { Action } from '@ngrx/store';

import { actionType } from '../utils';
import { Deed, DeedCounterResult } from '../models';

export class ActionTypes {
  static readonly ALL_COUNTERS = actionType('[Deed] All Counters');
  static readonly ALL_COUNTERS_SUCCESS = actionType('[Deed] All Counters Success');
  static readonly ALL_COUNTERS_FAIL = actionType('[Deed] All Counters Fail');
  static readonly FIND = actionType('[Deed] Find');
  static readonly FIND_SUCCESS = actionType('[Deed] Find Success');
  static readonly FIND_FAIL = actionType('[Deed] Find Fail');
  static readonly SET_CURRENT = actionType('[Deed] Set Current');
}

export class AllCountersAction implements Action {
  type = ActionTypes.ALL_COUNTERS;
}

export class AllCountersSuccessAction implements Action {
  type = ActionTypes.ALL_COUNTERS_SUCCESS;

  constructor(
    public payload: DeedCounterResult[],
  ) { }
}

export class AllCountersFailAction implements Action {
  type = ActionTypes.ALL_COUNTERS_FAIL;

  constructor(
    public payload: any,
  ) { }
}

export class FindAction implements Action {
  type = ActionTypes.FIND;
}

export class FindSuccessAction implements Action {
  type = ActionTypes.FIND_SUCCESS;

  constructor(
    public payload: Deed[],
  ) { }
}

export class FindFailAction implements Action {
  type = ActionTypes.FIND_FAIL;

  constructor(
    public payload: any,
  ) { }
}

export class SetCurrentAction implements Action {
  type = ActionTypes.SET_CURRENT;

  constructor(
    public payload: Deed,
  ) { }
}

export type Actions
  = AllCountersAction
  | AllCountersSuccessAction
  | AllCountersFailAction
  | FindAction
  | FindSuccessAction
  | FindFailAction
  | SetCurrentAction
  ;
