import { Component } from '@angular/core';

@Component({
  selector: 'app-nuevos-negocios',
  standalone: true,
  imports: [],
  templateUrl: './nuevos-negocios.component.html',
  styleUrl: './nuevos-negocios.component.css'
})
export class NuevosNegociosComponent {
  
  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
