import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-weather-list',
  standalone: true,
  templateUrl: './weather-list.component.html',
  imports: [
    FormsModule
  ],
  styleUrl: './weather-list.component.css'
})
export class WeatherListComponent implements OnInit{

  constructor(public apiService: ApiService) {
  }

  cityName: string = '';

  ngOnInit(): void {
      this.getDefaultWeather();
  };

  getDefaultWeather() {
    this.apiService.getDefaultWeather().subscribe({
      next: (weatherList) => {
        console.log(weatherList)
        this.apiService.weatherList = weatherList;
      },
      error: (e) =>{
        console.error(e);
      }
    });
  }

  getWeatherByName() {
    this.apiService.getWeatherByCity(this.cityName).subscribe({
      next: (weatherList) => {
        console.log("QUERY:"+ weatherList)
        this.apiService.weatherList = weatherList;
      },
      error: (e) =>{
        console.error(e);
      }
    });
  }
}
