import { Action } from '@ngrx/store';

import { actionType } from '../utils';
import { Credentials, Group, User } from '../models';

export class ActionTypes {
  static readonly LOGIN_WITH_EMAIL = actionType('[Auth] Login Email');
  static readonly LOGIN_WITH_FACEBOOK = actionType('[Auth] Login Facebook');
  static readonly LOGIN_WITH_TOKEN = actionType('[Auth] Login Token');
  static readonly LOGIN_SUCCESS = actionType('[Auth] Login Success');
  static readonly LOGIN_FAIL = actionType('[Auth] Login Fail');
  static readonly LOGOUT = actionType('[Auth] Logout');
  static readonly LOGOUT_SUCCESS = actionType('[Auth] Logout Success');
  static readonly SET_CURRENT_GROUP = actionType('[Auth] Set Current Group');
}

export class LoginWithEmailAction implements Action {
  type = ActionTypes.LOGIN_WITH_EMAIL;

  constructor(
    public payload: Credentials,
  ) { }
}

export class LoginWithFacebookAction implements Action {
  type = ActionTypes.LOGIN_WITH_FACEBOOK;

  constructor(
    public payload?: { group: string },
  ) { }
}

export class LoginWithTokenAction implements Action {
  type = ActionTypes.LOGIN_WITH_TOKEN;
}

export class LoginSuccessAction implements Action {
  type = ActionTypes.LOGIN_SUCCESS;

  constructor(
    public payload: User,
  ) { }
}

export class LoginFailAction implements Action {
  type = ActionTypes.LOGIN_FAIL;

  constructor(
    public payload: string,
  ) { }
}

export class LogoutAction implements Action {
  type = ActionTypes.LOGOUT;
}

export class LogoutSuccessAction implements Action {
  type = ActionTypes.LOGOUT_SUCCESS;
}

export class SetCurrentGroupAction implements Action {
  type = ActionTypes.SET_CURRENT_GROUP;

  constructor(
    public payload: Group,
  ) { }
}

export type Actions
  = LoginWithEmailAction
  | LoginWithFacebookAction
  | LoginWithTokenAction
  | LoginSuccessAction
  | LoginFailAction
  | LogoutAction
  | LogoutSuccessAction
  | SetCurrentGroupAction
  ;