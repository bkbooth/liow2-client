import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { FeedItem } from '../../core/models';
import { AuthService } from '../../core/services/auth.service';
import { StateService } from '../../core/services/state.service';

@Component({
  selector: 'liow-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedItemComponent {
  @Input() item: FeedItem;

  constructor(
    public auth: AuthService,
    public state: StateService,
  ) { }
}
