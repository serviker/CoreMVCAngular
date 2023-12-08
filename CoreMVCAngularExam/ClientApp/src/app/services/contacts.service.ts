
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../shared/contact.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'https://localhost:7217/api/Contacts'; // Adjust the URL to match your API endpoint

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl);
  }
}
