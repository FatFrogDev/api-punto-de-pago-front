import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import  { APIWeatherObject } from '../types/APIWeatherObject.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  ApiBaseUrl = "http://localhost:8080/api/v1/";


  weatherList: APIWeatherObject[];

  constructor(private htttp: HttpClient) {
    this.weatherList = [];
  }

  getWeatherByCity(city: string): Observable<APIWeatherObject[]> {
    console.log(this.ApiBaseUrl + city);
    return this.htttp.get<APIWeatherObject[]>(this.ApiBaseUrl + city);
  }

  getDefaultWeather(): Observable<APIWeatherObject[]> {
    return this.htttp.get<APIWeatherObject[]>(this.ApiBaseUrl);
  }
}
