import { Component } from '@angular/core';
import { FOOD_ITEMS } from './../../data/food-items';
import { FoodItem } from './../../models/food-item.model';
import { CommonModule } from '@angular/common';   // gives you *ngIf, *ngFor
import { FormsModule } from '@angular/forms';     // gives you [(ngModel)]
@Component({
  selector: 'app-meal-calculator',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './meal-calculator.html',
  styleUrl: './meal-calculator.css',
})

export class MealCalculator {
  totalClass8 = 25;
  totalClass9 = 30;
  totalClass10 = 28;

  presentClass8: number = 0;
  presentClass9: number = 0;
  presentClass10: number = 0;

  errorClass8 = '';
  errorClass9 = '';
  errorClass10 = '';

  totalPresent = 0;
  results: any[] = [];

  foodItems: FoodItem[] = FOOD_ITEMS;

  currentDate = new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  constructor() {
    this.resetTable();
  }

  resetTable() {
    this.results = this.foodItems.map(item => ({
      id: item.id,
      name: item.foodName,
      unit: item.unit,
      perStudent: (0).toFixed(2),
      totalQty: (0).toFixed(2)
    }));
  }

  // While typing: strip non-digits, show error if junk entered
  sanitizeInput(value: string, field: 'class8' | 'class9' | 'class10'): number {
    const cleaned = value.replace(/[^0-9]/g, '');
    if (value !== cleaned) {
      this.setError(field, 'Enter proper inputs – only digits allowed');
    } else {
      this.setError(field, '');
    }
    return cleaned ? +cleaned : NaN;
  }

  // On blur: trim junk, reset empty to 0, block negatives, validate range
cleanupOnBlur(field: 'class8' | 'class9' | 'class10') {
  let value = field === 'class8' ? this.presentClass8 :
              field === 'class9' ? this.presentClass9 : this.presentClass10;

  const strVal = String(value);

  // If minus sign is present, force reset to 0
  if (strVal.includes('-')) {
    value = 0;
    this.setError(field, 'Negative values are not allowed');
  } else {
    // Sanitize: strip non-digits
    const cleaned = strVal.replace(/[^0-9]/g, '');
    value = cleaned ? +cleaned : 0;

    // Validate range
    const total = field === 'class8' ? this.totalClass8 :
                  field === 'class9' ? this.totalClass9 : this.totalClass10;

    if (value > total) {
      this.setError(field, `Enter a value between 0 and ${total}`);
    } else {
      this.setError(field, '');
    }
  }

  // Assign back
  if (field === 'class8') this.presentClass8 = value;
  if (field === 'class9') this.presentClass9 = value;
  if (field === 'class10') this.presentClass10 = value;
}


  setError(field: 'class8' | 'class9' | 'class10', message: string) {
    if (field === 'class8') this.errorClass8 = message;
    if (field === 'class9') this.errorClass9 = message;
    if (field === 'class10') this.errorClass10 = message;
  }

  calculateMeals() {
    if (this.errorClass8 || this.errorClass9 || this.errorClass10) {
      this.totalPresent = 0;
      this.resetTable();
      return;
    }

    this.totalPresent = this.presentClass8 + this.presentClass9 + this.presentClass10;

    this.results = this.foodItems.map(item => ({
      id: item.id,
      name: item.foodName,
      unit: item.unit,
      perStudent: item.quantityPerStudent.toFixed(2),
      totalQty: (item.quantityPerStudent * this.totalPresent).toFixed(2)
    }));
  }

  getAbsent(total: number, present: number): number {
    if (present < 0 || present > total || isNaN(present)) return total;
    return total - present;
  }

  printPage() {
  window.print();
}

}