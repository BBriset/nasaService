import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { apiKey } from './environement';
import { ImgOfTheDay } from './imgOfTheDay';
@Injectable({
  providedIn: 'root',
})
export class NasaService {
  constructor(public http: HttpClient) {}
  getImageOfTheDay(): Observable<ImgOfTheDay> {
    return this.http.get<ImgOfTheDay>(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
    );
  }
}
