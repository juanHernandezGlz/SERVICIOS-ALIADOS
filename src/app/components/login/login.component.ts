import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(){
    if(this.authService.login(this.username, this.password)){
      const role = this.authService.getRole();

      //REDIRIGIMOS SEGUN ROL
      switch(role){
        case 'admin':
          this.router.navigate(['/inicio']);
          break;
        case 'forestal':
          this.router.navigate(['/inicio']);
          break;
        case 'nuevos':
          this.router.navigate(['/inicio']);
          break;
        case 'electrica':
          this.router.navigate(['/inicio']);
          break;
      }
    }else{
      this.errorMessage = 'Credenciales incorrectas. Intente nuevamente.';
    }
  }
}
