// author.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PhoneNumber } from '../shared/phoneNumber.interface';

@Injectable({
  providedIn: 'root',
})
export class PhoneNumberService {
  private apiUrl = 'https://localhost:7217/api/PhoneNumbers'; // Adjust the URL to match your API endpoint

  constructor(private http: HttpClient) { }

  getCategories(): Observable<PhoneNumber[]> {
    return this.http.get<PhoneNumber[]>(this.apiUrl);
  }
}
