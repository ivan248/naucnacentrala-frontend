import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SearchService {

  url: string = 'http://localhost:8080/api/search';

  constructor(private router: Router,
              private httpClient: HttpClient) { }

  searchByOneField(searchField: String, searchValue: String) {

    return this.httpClient
    .get(this.url + '/' + searchField + '/' + searchValue);
  }

  searchByMultipleFields(json: any) {

    return this.httpClient
    .post(this.url + '/multipleFields', json);
  }

  searchByMultipleOptionalFields(body: any) {


    return this.httpClient
    .post(this.url + '/multipleOptionalFields', body);
  }
}
