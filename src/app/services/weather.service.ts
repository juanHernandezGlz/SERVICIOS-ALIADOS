import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKeyWeather = '36e41a4abfad54ea78fff6803aa90419';
  private apiUrlWeather = 'https://api.openweathermap.org/data/2.5/weather'; 


  constructor(private http: HttpClient) { }

  getWeatherByCity(city: string): Observable<any>{
    const url = `${this.apiUrlWeather}?q=${city}&appid=${this.apiKeyWeather}&units=metric&lang=es`;
    return this.http.get(url);
  }


}
