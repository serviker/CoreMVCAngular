import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhoneNumberDataService } from '../phoneNumbers/phoneNumbersdata.service';
import { CategoryDataService } from '../categories/categorydata.service';

@Component({
  selector: 'app-add-contact-dialog',
  templateUrl: './add-contact-dialog.component.html',
  styleUrls: ['./add-contact-dialog.component.css'],
  
})
export class AddContactDialogComponent {
  contactForm: any;
  phoneNumbers: any[] | undefined; // Замените any на реальный тип данных
  categories: any[] | undefined; // Замените any на реальный тип данных
  constructor(
    public dialogRef: MatDialogRef<AddContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private phoneNumberDataService: PhoneNumberDataService,
    private categoryDataService: CategoryDataService,
  ) { }

  initializeForm(): void {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneId: ['', Validators.required],
      categoryId: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.initializeForm();
    this.getPhoneNumbers();
    this.getCategories();
  }

  getPhoneNumbers(): void {
    this.phoneNumberDataService.getPhoneNumbers().subscribe((data: any[] | undefined) => {
      this.phoneNumbers = data;
    });
  }

  getCategories(): void {
    this.categoryDataService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }


  onSubmit(): void {
    console.log('onSubmit() called');
    if (this.contactForm.valid) {
      console.log('Form is valid');
      console.log('Добавлен новый контакт:', this.contactForm.value);

      // Закрываем диалоговое окно и передаем данные в родительский компонент
      this.dialogRef.close(this.contactForm.value);
      console.log('Диалог успешно закрыт в onSubmit!');
    } else {
      console.log('Form is invalid');
    }
  }

}
