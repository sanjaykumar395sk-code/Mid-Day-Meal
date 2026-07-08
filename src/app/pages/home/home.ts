import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SCHOOL_INFO } from '../../data/school-info';

@Component({
  selector: 'app-home',
    standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
      schoolInfo = SCHOOL_INFO;
}
