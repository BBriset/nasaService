import { Component, OnInit } from '@angular/core';
import { apiKey } from './environement';
import { NasaService } from './Nasa.service';
import { ImgOfTheDay } from './imgOfTheDay';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'nasaService';
  imgOfTheDay: ImgOfTheDay = {
    url: '',
  };

  constructor(public nasaService: NasaService) {}
  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe((imgFromNasaApi) => {
      this.imgOfTheDay.url = imgFromNasaApi.url;
    });
  }
  test() {
    console.log(this.imgOfTheDay.url);
  }
}
