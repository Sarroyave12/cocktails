import { Routes } from '@angular/router';
import { CoctailComponent } from './coctails/coctails.component';
import { CoctailInfoComponent } from './coctails/pages/coctail-info/coctail-info.component';
import { CoctailDetailComponent } from './coctails/pages/coctail-detail/coctail-detail.component';

export const routes: Routes = [
  {
    path: 'coctails',
    component: CoctailComponent,
    children: [
      {
        path: 'coctail-info',
        title: 'Coctail Info',
        component: CoctailInfoComponent,
      },
      {
        path: 'coctail-detail',
        title: 'Coctail Detail',
        component: CoctailDetailComponent,
      },
      {
        path: '',
        redirectTo: 'coctail-info',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'coctails',
    pathMatch: 'full',
  },
];
