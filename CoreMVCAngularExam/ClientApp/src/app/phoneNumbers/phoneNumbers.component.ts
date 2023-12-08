import { Component, OnInit } from '@angular/core';
import { PhoneNumberDataService, PhoneNumber } from './phoneNumbersdata.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

import { AddPhoneNumberDialogComponent } from '../add-phone-number-dialog/add-phone-number-dialog.component';
import { EditPhoneNumberDialogComponent } from '../edit-phone-number-dialog/edit-phone-number-dialog.component';



@Component({
  selector: 'phoneNumbers',
  templateUrl: './phoneNumbers.component.html',
  styleUrls: ['./phoneNumbers.component.css']
})
export class PhoneNumbersComponent implements OnInit {
  public phoneNumbers: PhoneNumber[] | undefined;
  snackBar: any;
  http: any;

  constructor(private phoneNumberDataSrv: PhoneNumberDataService, private dialog: MatDialog) {
    }
    
  ngOnInit() {
    this.phoneNumbers = this.phoneNumberDataSrv.phoneNumbers;
    this.showAll();
    }
    
    showAll() {
      this.phoneNumberDataSrv.showAll();
    }

  addPhoneNumber() {
    // Открываем диалоговое окно для добавления контакта
    const dialogRef = this.dialog.open(AddPhoneNumberDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Данные из диалога:', result);
        this.phoneNumberDataSrv.addPhoneNumber(result);
        // Дополнительные действия
      } else {
        console.log('Диалог закрыт без данных');
      }
    });
  }
  
  updatePhoneNumber(phoneId: number | undefined, numberPhone: string | undefined): void {
    if (phoneId === undefined || !numberPhone) {
      // Отобразить сообщение об ошибке пользователю, что categoryId не определен
      return;
    }

    const dialogRef = this.dialog.open(EditPhoneNumberDialogComponent, {
      data: { phoneId, numberPhone }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.phoneId && result.numberPhone) {
        this.phoneNumberDataSrv.updatePhoneNumber(result.phoneId, result.numberPhone)
          .subscribe(
            response => {
              this.showAll();
            },
            error => {

              if (error instanceof HttpErrorResponse) {

                if (error.error.errors && error.error.errors.numberPhone) {

                  // Отобразить сообщение об ошибке пользователю
                  // Например, используя Angular Material Snackbar
                  this.snackBar.open('Validation error: ' + error.error.errors.numberPhone[0], 'Close', {
                    duration: 5000,
                  });
                }
              }
            }
          );
      }
    });
  }

  deletePhoneNumber(phoneId: number): void  {
    this.phoneNumberDataSrv.deletePhoneNumber(phoneId);
  }
}
