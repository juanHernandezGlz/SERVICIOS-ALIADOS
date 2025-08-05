import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  weatherData : any;
  ciudad = 'Chillán';

  constructor(private WeatherService: WeatherService){}

  ngOnInit(): void{
    this.WeatherService.getWeatherByCity(this.ciudad).subscribe({
      next: (data) =>{
        this.weatherData = data;
      },
      error: (err) =>{
        console.error('Error al obtener el clima', err);
      }
    });
  }

}
