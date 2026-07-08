import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
    standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  isHomePage = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isHomePage = this.router.url === '/mid-day-meal-scheme/home' || this.router.url === '/';
    });
  }
}
