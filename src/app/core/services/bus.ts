import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BackendBus } from '../models/bus.model';

@Injectable({ providedIn: 'root' })
export class BusService {

  private readonly API = 'http://localhost:8082/api/buses';

  constructor(private http: HttpClient) {}

  searchBuses(
    source: string,
    destination: string,
    date: string
  ): Observable<BackendBus[]> {
    return this.http.get<BackendBus[]>(`${this.API}/search`, {
      params: { source, destination, date }
    });
  }
}
