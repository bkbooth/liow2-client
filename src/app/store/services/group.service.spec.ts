import { inject, TestBed } from '@angular/core/testing';
import { Response, ResponseOptions, URLSearchParams } from '@angular/http';
import { JwtHttp } from 'ng2-ui-auth';
import { Observable } from 'rxjs/Observable';

import { GroupService } from './group.service';
import { Group } from '../models';
import { HttpStubService } from '../../../testing';

describe(`GroupService`, () => {
  let service: GroupService;
  let http: JwtHttp;

  const testGroup = {
    created: new Date().toDateString(),
    modified: new Date().toDateString(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GroupService,
        { provide: JwtHttp, useClass: HttpStubService },
      ],
    });
  });

  beforeEach(inject([GroupService], (_service: GroupService) => {
    service = _service;
    http = TestBed.get(JwtHttp);
  }));

  describe(`#find`, () => {
    it(`should pass search params to http.get`, () => {
      const response = new Response(new ResponseOptions({ body: [testGroup] }));
      const httpSpy = spyOn(http, 'get').and.returnValue(Observable.of(response));
      const search = new URLSearchParams();
      service.find(search).subscribe(() => {
        const requestOptions = httpSpy.calls.mostRecent().args[1];
        expect(requestOptions.search).toBe(search);
      });
    });

    it(`should convert Group date strings to Date objects`, () => {
      const response = new Response(new ResponseOptions({ body: [testGroup] }));
      spyOn(http, 'get').and.returnValue(Observable.of(response));
      service.find().subscribe((groups: Group[]) => {
        expect(groups[0].created instanceof Date).toBe(true);
        expect(groups[0].modified instanceof Date).toBe(true);
      });
    });

    it(`should generate a Group coverImage`, () => {
      const response = new Response(new ResponseOptions({ body: [testGroup] }));
      spyOn(http, 'get').and.returnValue(Observable.of(response));
      service.find().subscribe((groups: Group[]) => {
        expect(groups[0].coverImage).toMatch(/\/images\/header[0-5].jpg/);
      });
    });
  });

  describe(`#findOne`, () => {
    it(`should return a single Group`, () => {
      const response = new Response(new ResponseOptions({ body: [testGroup] }));
      spyOn(http, 'get').and.returnValue(Observable.of(response));
      service.findOne().subscribe((group: Group) => expect(group).toBe(testGroup));
    });

    it(`should throw an error if no Groups found`, () => {
      const response = new Response(new ResponseOptions({ body: [] }));
      spyOn(http, 'get').and.returnValue(Observable.of(response));
      service.findOne().subscribe(() => {}, (error) => expect(error.message).toBe(`Group not found`));
    });

    it(`should throw an error if more than one Group found`, () => {
      const response = new Response(new ResponseOptions({ body: [testGroup, testGroup] }));
      spyOn(http, 'get').and.returnValue(Observable.of(response));
      service.findOne().subscribe(() => {}, (error) => expect(error.message).toBe(`Group not found`));
    });
  });
});
