import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {

  from = '';
  to = '';
  date = '';

  constructor(private router: Router) {}

  search(): void {
    if (!this.from || !this.to || !this.date) {
      return;
    }

    this.router.navigate(['/results'], {
      queryParams: {
        from: this.from,
        to: this.to,
        date: this.date
      }
    });
  }
}
