import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { JwtHttp } from 'ng2-ui-auth';
import { Observable } from 'rxjs/Observable';
import { has } from 'lodash';

import { environment } from '../../../environments/environment';
import { Comment, NewComment } from './index';

@Injectable()
export class CommentService {
  private baseUrl: string;

  constructor(
    private http: JwtHttp,
  ) {
    this.baseUrl = environment.apiBaseUrl;
  }

  save(comment: Comment|NewComment): Observable<Comment> {
    const method = has(comment, '_id') ? 'put' : 'post';
    const urlSuffix = `/comments${has(comment, '_id') ? `/${comment._id}` : ''}`;

    let url;
    if (has(comment.target, 'deed')) {
      url = `/deeds/${comment.target.deed}${urlSuffix}`;
    } else if (has(comment.target, 'group')) {
      url = `/groups/${comment.target.group}${urlSuffix}`;
    } else if (has(comment.target, 'comment')) {
      url = `/comments/${comment.target.comment}${urlSuffix}`;
    } else if (has(comment.target, 'act')) {
      url = `/acts/${comment.target.act}${urlSuffix}`;
    }

    return this.http[method](this.baseUrl + url, comment)
      .map((response: Response) => response.json() || {});
  }
}
