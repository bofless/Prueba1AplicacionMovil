import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'empleados',
    loadComponent: () => import('./empleados/empleados.page').then( m => m.EmpleadosPage)
  },
  {
    path: 'departamentos',
    loadComponent: () => import('./departamentos/departamentos.page').then( m => m.DepartamentosPage)
  },
  {
    path: 'informes',
    loadComponent: () => import('./informes/informes.page').then( m => m.InformesPage)
  },
  {
    path: 'asistencia',
    loadComponent: () => import('./asistencia/asistencia.page').then( m => m.AsistenciaPage)
  },
  {
    path: 'tareas',
    loadComponent: () => import('./tareas/tareas.page').then( m => m.TareasPage)
  },
  {
    path: 'alo',
    loadComponent: () => import('./alo/alo.page').then( m => m.AloPage)
  },
];
