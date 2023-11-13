import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'details',
        loadComponent: () =>
            import('../app/word-details/word-details.component').then(
                (m) => m.WordDetailsComponent
            ),
    },
];
