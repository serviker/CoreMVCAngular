import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-phone-number-dialog',
  templateUrl: './add-phone-number-dialog.component.html',
  styleUrls: ['./add-phone-number-dialog.component.css']
})
export class AddPhoneNumberDialogComponent {
  phoneNumberForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddPhoneNumberDialogComponent>, private fb: FormBuilder) {
    this.phoneNumberForm = this.fb.group({
      numberPhone: ['', Validators.required]
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    console.log('onSubmit() called');
    if (this.phoneNumberForm.valid) {
      console.log('Form is valid');

      const numberPhone = this.phoneNumberForm.value.numberPhone;
      console.log('Добавлена новая категория:', numberPhone);

      // Закрываем диалоговое окно и передаем данные в родительский компонент
      this.dialogRef.close(numberPhone);
      console.log('Dialog closed successfully');
    } else {
      console.log('Form is invalid');
    }
  }
}

