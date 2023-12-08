import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'addNewCategory',
  templateUrl: './addNewCategory.component.html',
  styleUrls: ['./addNewCategory.component.css']
})
export class AddCategoryDialogComponent {
  categoryForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddCategoryDialogComponent>, private fb: FormBuilder) {
    this.categoryForm = this.fb.group({
      categoryName: ['', Validators.required]
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    console.log('onSubmit() called');
    if (this.categoryForm.valid) {
      console.log('Form is valid');

      const categoryName = this.categoryForm.value.categoryName;
      console.log('Добавлена новая категория:', categoryName);

      // Закрываем диалоговое окно и передаем данные в родительский компонент
      this.dialogRef.close(categoryName);
      console.log('Dialog closed successfully');
    } else {
      console.log('Form is invalid');
    }
  }

}
