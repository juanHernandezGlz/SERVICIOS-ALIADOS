import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  isButtonVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll(){
    this.isButtonVisible = window.scrollY > 100;
  }

  scrollToTop(){
    window.scrollTo({top:0, behavior:'smooth'})
  }
}
