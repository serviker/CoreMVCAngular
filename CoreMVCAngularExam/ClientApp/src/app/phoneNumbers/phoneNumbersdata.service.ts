import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class PhoneNumber {
  phoneId: number | undefined;
  numberPhone: string | undefined;
}

@Injectable()
export class PhoneNumberDataService {

  public phoneNumbers: PhoneNumber[] = [];
    baseUrl: string;

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.http = http;
        this.baseUrl = baseUrl;
    }
    
    getPhoneNumbers(): Observable<any[]> {
      return this.http.get<any[]>(`https://localhost:7217/api/PhoneNumbers`);
    }

    showAll() {
      this.http.get<PhoneNumber[]>(`https://localhost:7217/api/PhoneNumbers`).subscribe(result => {
        //this.phoneNumbers = result;
        this.phoneNumbers.length = 0;
        this.phoneNumbers.push(...result as PhoneNumber[]);
        console.log(result);
      }, error => console.error(error));
    }

  addPhoneNumber(newPhoneNumber: PhoneNumber) {
    const body = {
      numberPhone: newPhoneNumber 
    };
    console.log(newPhoneNumber);
    this.http.post(`https://localhost:7217/api/PhoneNumbers`, body).subscribe(
      result => {
        this.showAll();
      },
      error => console.error('Error adding category:', error)
    );
  }

  updatePhoneNumber(phoneId: number, numberPhone: string): Observable<any> {
    const body = {
      phoneId: phoneId,
      numberPhone: numberPhone
    };
    console.log("categoryData:", phoneId, numberPhone);
    return this.http.put(`https://localhost:7217/api/PhoneNumbers/${phoneId}`, body);
  }


  deletePhoneNumber(phoneId: number): void {
    this.http.delete(`https://localhost:7217/api/PhoneNumbers/${phoneId}`).subscribe(
      result => {
        this.showAll();
      },
      error => console.error(error)
    );
  }

  
}
