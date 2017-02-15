import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { JwtHttp } from 'ng2-ui-auth';
import { Observable } from 'rxjs/Observable';
import * as seedrandom from 'seedrandom';

import { environment } from '../../../environments/environment';
import { buildUrlSearchParams, SearchParams } from '../utils';
import { Group } from './index';

@Injectable()
export class GroupService {
  private baseUrl: string;
  private numberOfCoverImages = 6;

  constructor(
    private http: JwtHttp,
  ) {
    this.baseUrl = `${environment.apiBaseUrl}/groups`;
  }

  find(params: SearchParams = {}): Observable<Group[]> {
    return this.http.get(this.baseUrl, { search: buildUrlSearchParams(params) })
      .map((response: Response) => response.json() || [])
      .map((groups: Group[]) =>
        groups.map((group: Group) => {
          // Convert all date strings to Date objects
          if (group.created) { group.created = new Date(group.created); }
          if (group.modified) { group.modified = new Date(group.modified); }

          // Set a random cover image seeded by the group ID
          group.coverImage = `/images/header${Math.floor(seedrandom(group._id)() * this.numberOfCoverImages)}.jpg`;

          return group;
        }));
  }

  findOne(params: SearchParams = {}): Observable<Group> {
    return this.find(params)
      .map((groups: Group[]) => {
        if (groups.length !== 1) {
          throw new Error(`Group not found`);
        }

        return groups[0];
      });
  }

  count(params: SearchParams = {}): Observable<number> {
    params['count'] = true;
    return this.http.get(this.baseUrl, { search: buildUrlSearchParams(params) })
      .map((response: Response) => response.json());
  }
}
