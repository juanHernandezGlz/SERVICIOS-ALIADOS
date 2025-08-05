import { Routes } from '@angular/router';
import { NuevosNegociosComponent } from './components/nuevos-negocios/nuevos-negocios.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ForestalComponent } from './components/forestal/forestal.component';
import { ElectricaComponent } from './components/electrica/electrica.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

export const routes: Routes = [
    {path: 'nuevo-negocios', component:NuevosNegociosComponent},
    {path: 'forestal', component: ForestalComponent},
    {path: 'electrica', component: ElectricaComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'inicio', component:InicioComponent},
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: '**', redirectTo: 'inicio' }
];
