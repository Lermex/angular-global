import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/courses';
import { AboutComponent } from '../pages/about';
import { NoContentComponent } from '../pages/no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: 'courses',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '',      redirectTo: 'courses', pathMatch: 'full' },
  { path: '**',    component: NoContentComponent },
];
