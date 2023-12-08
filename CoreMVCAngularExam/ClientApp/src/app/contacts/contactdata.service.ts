import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Contact {
  contactId: number | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  categoryId: number | undefined;
  phoneId: number | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class ContactDataService {

  public contacts: Contact[] = [];
  baseUrl: string;

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.http = http;
        this.baseUrl = baseUrl;
  }

    showAll() {
      this.http.get<Contact[]>(`https://localhost:7217/api/Contacts`).subscribe(result => {
       // this.contacts = result;
        this.contacts.length = 0;
        this.contacts.push(...result as Contact[]);
        console.log(result);
      }, error => console.error(error));
  }

  addContact(contactData: any): Observable<any> {
    return this.http.post<any>(`https://localhost:7217/api/Contacts`, contactData);
  }

  updateContact(contactId: number, firstName: string, lastName: string, categoryId: number, phoneId: number): Observable<any> {
    const body = {
      contactId: contactId,
      firstName: firstName,
      lastName: lastName,
      categoryId: categoryId,
      phoneId: phoneId
    };
    return this.http.put(`https://localhost:7217/api/Contacts/${contactId}`, body)
  }

  deleteContact(contactId: number): void {
    this.http.delete(`https://localhost:7217/api/Contacts/${contactId}`).subscribe(
      result => {
        this.showAll();
      },
      error => console.error(error)
    );
  }
}
