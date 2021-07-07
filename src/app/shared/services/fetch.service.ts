import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  constructor(private http: HttpClient) {}

  getFishes = () => {
    return this.http.get('https://acnhapi.com/v1a/fish');
  };

  getBugs = () => {
    return this.http.get('https://acnhapi.com/v1a/bugs');
  };

  getSongs = () => {
    return this.http.get('https://acnhapi.com/v1a/songs');
  };
}
