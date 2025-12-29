import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';

import { BusService } from '../../core/services/bus';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results.html',
  styleUrls: ['./results.scss']
})
export class ResultsComponent implements OnInit {

  buses: any[] = [];
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private busService: BusService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.busService.searchBuses(
        params['from'],
        params['to'],
        params['date']
      )
      .pipe(
        finalize(() => {
          // 🔴 GUARANTEE loading always stops
          this.loading = false;
        })
      )
      .subscribe({
        next: (res: any[]) => {
          console.log('API RESPONSE:', res);

          // 🔴 MAP BACKEND RESPONSE → UI FORMAT
          this.buses = res.map(b => ({
            id: b.busId,
            operator: b.operatorName,
            busNumber: b.busNumber,
            departureTime: b.boardingTime,
            arrivalTime: b.arrivalTime,
            price: b.fare
          }));
        },
        error: err => {
          console.error('Bus API error', err);
        }
      });
    });
  }
}
