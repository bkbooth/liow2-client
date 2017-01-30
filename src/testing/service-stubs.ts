import { Injectable } from '@angular/core';

@Injectable()
export class AuthStubService {
  authenticateEmail() { }
  isAuthenticated() { }
  logout() { }
}

@Injectable()
export class DeedStubService {
  find() { }
}

@Injectable()
export class GroupStubService {
  find() { }
  findOne() { }
}

@Injectable()
export class HttpStubService {
  get() { }
}

@Injectable()
export class Ng2AuthStubService {
  isAuthenticated() { }
  login() { }
  logout() { }
}

@Injectable()
export class StoreStubService<T> {
  select() { }
  dispatch() { }
}

@Injectable()
export class UserStubService {
  loadCurrent() { }
}