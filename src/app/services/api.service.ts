import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  base_url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  constructor() {}

  async getWord(searchTerm: string | undefined) {
    const data = await fetch(this.base_url + searchTerm);
    return data.json() ?? [];
  }
}

/* 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  base_url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  constructor(private http: HttpClient) {}

  getWord(searchTerm: any) {
    return this.http.get(this.base_url + searchTerm);
  }
}

*/