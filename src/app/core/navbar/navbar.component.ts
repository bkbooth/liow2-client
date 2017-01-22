import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers';
import * as layout from '../actions/layout';

@Component({
  selector: 'liow-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isMenuOpen$: Observable<boolean>;

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    this.isMenuOpen$ = this.store.select(fromRoot.getIsMenuOpen);
  }

  toggleMenu(): void {
    this.store.dispatch(new layout.ToggleMenuAction());
  }

  closeMenu(): void {
    this.store.dispatch(new layout.CloseMenuAction());
  }
}
