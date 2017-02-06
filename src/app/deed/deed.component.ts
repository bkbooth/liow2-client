import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Deed } from '../store/models';
import * as deed from '../store/actions/deed';
import * as loginModal from '../store/actions/modal/login';
import * as fromRoot from '../store/reducers';

@Component({
  templateUrl: './deed.component.html',
  styleUrls: ['./deed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeedComponent implements OnDestroy, OnInit {
  deed$: Observable<Deed>;
  deedCounter$: Observable<number>;
  isAuthenticated$: Observable<boolean>;
  isDoing$: Observable<boolean>;

  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit(): void {
    this.deed$ = this.store.select(fromRoot.getCurrentDeed);
    this.deedCounter$ = this.store.select(fromRoot.getCurrentDeedCount);
    this.isAuthenticated$ = this.store.select(fromRoot.getIsAuthenticated);
    // this.isDoing$ = this.store.select(fromRoot.getDeedIsDoing);

    this.subscription = Observable.combineLatest(
      this.store.select(fromRoot.getDeeds),
      this.route.params.map((params: Params) => params['deedSlug']),
    )
      .distinctUntilChanged()
      .subscribe(([deeds, deedSlug]: [Deed[], string]) => {
        const currentDeed = deeds.find((deed: Deed) => deed.urlTitle === deedSlug);
        if (currentDeed) { this.store.dispatch(new deed.SetCurrentAction(currentDeed)); }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  openLoginModal(): void {
    this.store.dispatch(new loginModal.OpenAction());
  }
}
