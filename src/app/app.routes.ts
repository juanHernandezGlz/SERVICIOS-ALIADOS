import { Routes } from '@angular/router';
import { NuevosNegociosComponent } from './components/nuevos-negocios/nuevos-negocios.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ForestalComponent } from './components/forestal/forestal.component';
import { ElectricaComponent } from './components/electrica/electrica.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
    // {path: 'nuevo-negocios', component:NuevosNegociosComponent},
    // {path: 'forestal', component: ForestalComponent},
    // {path: 'electrica', component: ElectricaComponent},
    // {path: 'nosotros', component: NosotrosComponent},
    // {path: 'inicio', component:InicioComponent},
    // {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    // {path: '**', redirectTo: 'inicio' }

    //LOGIN
    {path: 'login', component: LoginComponent, canActivate:[loginGuard]},

    //INICIO VISIBLE SOLO SI ESTÁ LOGUEADO
    {path: 'inicio', component: InicioComponent, canActivate: [authGuard]},

    //NOSOTROS -> ACCESIBLE A TODOS LOS LOGUEADOS
    {path: 'nosotros', component: NosotrosComponent, canActivate: [authGuard]},

    //RUTAS PROTEGIDAS SEGUN ROL
    {path: 'nuevos-negocios', component: NuevosNegociosComponent, canActivate: [authGuard], data: {roles: ['admin', 'nuevos']}},
    {path: 'forestal', component: ForestalComponent, canActivate: [authGuard], data: {roles: ['admin', 'forestal']}},
    {path: 'electrica', component: ElectricaComponent, canActivate: [authGuard], data: {roles: ['admin', 'electrica']}},
    {path: 'admin', component: AdministracionComponent, canActivate: [authGuard], data: {roles: ['admin']}},

    //REDIRECCIONES
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: '**', redirectTo: 'inicio' }
];
