import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MealCalculator } from './pages/meal-calculator/meal-calculator';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'mid-day-meal-scheme',
    component: MealCalculator
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];