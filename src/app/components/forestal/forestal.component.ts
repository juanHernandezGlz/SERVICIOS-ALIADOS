import { Component } from '@angular/core';

@Component({
  selector: 'app-forestal',
  standalone: true,
  imports: [],
  templateUrl: './forestal.component.html',
  styleUrl: './forestal.component.css'
})
export class ForestalComponent {
  scrollToSection(id: string) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
}
