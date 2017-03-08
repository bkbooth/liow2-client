import { Action } from '@ngrx/store';

import { actionType } from '../utils';
import { AlertInitialise } from './index';

export class ActionTypes {
  static readonly ERROR = actionType('[Alertify] Error');
  static readonly LOG = actionType('[Alertify] Log');
  static readonly SUCCESS = actionType('[Alertify] Success');
}

export class ErrorAction implements Action {
  type = ActionTypes.ERROR;

  constructor(
    public payload: string|AlertInitialise,
  ) { }
}

export class LogAction implements Action {
  type = ActionTypes.LOG;

  constructor(
    public payload: string|AlertInitialise,
  ) { }
}

export class SuccessAction implements Action {
  type = ActionTypes.SUCCESS;

  constructor(
    public payload: string|AlertInitialise,
  ) { }
}

export type Actions
  = ErrorAction
  | LogAction
  | SuccessAction
  ;
