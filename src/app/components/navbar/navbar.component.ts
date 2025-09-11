import { Component, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, NgIf, ConfirmModalComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @ViewChild('logoutModal') logoutModal!: ConfirmModalComponent;

    constructor(public authService: AuthService, private router:Router){}

    openModal() {
    this.logoutModal.open();
  }

  logout() {
    this.authService.logout();
  }

}
