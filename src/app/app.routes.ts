import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MealCalculator } from './pages/meal-calculator/meal-calculator';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'mid-day-meal-scheme/home',
    pathMatch: 'full'
  },
  {
    path: 'mid-day-meal-scheme/home',
    component: Home
  },
  {
    path: 'mid-day-meal-scheme/calculator',
    component: MealCalculator
  },
  {
    path: '**',
    redirectTo: 'mid-day-meal-scheme/home'
  }
];