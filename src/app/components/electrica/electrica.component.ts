import { Component } from '@angular/core';

@Component({
  selector: 'app-electrica',
  standalone: true,
  imports: [],
  templateUrl: './electrica.component.html',
  styleUrl: './electrica.component.css'
})
export class ElectricaComponent {
  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
