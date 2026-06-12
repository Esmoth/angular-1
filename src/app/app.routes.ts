import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { Clientes } from './components/clientes/clientes';
import { Usuario } from './components/usuario/usuario';
import { TeAmoDianis } from './pages/te-amo-dianis/te-amo-dianis';

export const routes: Routes = [
    { path: 'contador', component: Counter },
    { path: 'clientes', component: Clientes},
    { path: 'usuario', component: Usuario},
    { path: 'te-amo-dianis', component: TeAmoDianis}

];
