import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
        children: [
            {
                path: 'contacto',
                title: 'contacto',
                loadComponent: () => import('./dashboard/pages/contacto/contacto.component'),


            },
            {
                path: 'perfil',
                title: 'perfil',
                loadComponent: () => import('./dashboard/pages/perfil/perfil.component'),


            }
            ,
            {
                path: 'home',
                title: 'home',
                loadComponent: () => import('./dashboard/pages/home/home.component'),


            },
            {
                path: '',
                redirectTo: 'control-flow',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
