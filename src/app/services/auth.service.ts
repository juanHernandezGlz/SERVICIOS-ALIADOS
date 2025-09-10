import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export type Role = 'admin' | 'forestal' | 'nuevos' | 'electrica';

interface User {
  username: string;
  password: string;
  role: Role;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: User[] = [
    {username: 'admin', password: 'saliados', role: 'admin'},
    {username: 'forestal', password: 'forestal2025', role: 'forestal'},
    {username: 'nuevos', password: 'nuevosnegocios2025', role: 'nuevos'},
    {username: 'electrica', password: 'electrica2025', role: 'electrica'}

  ];

  private userKey = 'app_user';
  //HANDLER PARA EVITAR IR ATRAS
  private backNavigationHandler = () =>{
    history.pushState(null, '', location.href);
  }

  constructor(private router: Router) { }

  login(username: string, pasword: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === pasword);
    if(user){
      const sessionDurationMinutos = 10;  // Duración de la sesión en minutos
      const expireAt = new Date().getTime() + sessionDurationMinutos * 60 * 1000;

      localStorage.setItem(this.userKey, JSON.stringify(user));
      localStorage.setItem('expire_at', expireAt.toString());

      //BLOQUEO DEL BOTON ATRAS
      this.starPreventBack();
      return true;
    }
    return false
  }

  logout(){
    localStorage.removeItem(this.userKey);
    this.stopPreventBack();
    this.router.navigate(['/login'], {replaceUrl: true});
  }

  getUser(): User | null {
    const raw = localStorage.getItem(this.userKey);
    return raw ? JSON.parse(raw) as User : null;
  }

  getRole(): Role | null {
    const u = this.getUser();
    return u ? u.role : null;
  }

  isLoggedIn(): boolean {
    return !!this.getUser();
  }

  hasRole(allowed: Role[] | string[]): boolean{
    const r = this.getRole();
    return r ? allowed.includes(r) : false;
  }

  //EVITAR RETROCEDER: LLAMADAS IDEMPOTENTES

  starPreventBack(){
    try{
      history.pushState(null, '', location.href);
      window.addEventListener('popstate', this.backNavigationHandler);
    }catch(e){
      console.warn('Error al activar bloqueo de retroceso', e);
    }
  }

  stopPreventBack(){
    try{
      window.removeEventListener('popstate', this.backNavigationHandler);
    }catch(e){}
  }

}
