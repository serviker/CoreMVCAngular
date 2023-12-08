import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-category-dialog',
  templateUrl: './edit-category-dialog.component.html',
  styleUrls: ['./edit-category-dialog.component.css']
})
export class EditCategoryDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditCategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { categoryId: number, categoryName: string }
  ) {}

  onSaveClick(): void {
    // Здесь вы можете добавить логику сохранения изменений
    this.dialogRef.close({ categoryId: this.data.categoryId, categoryName: this.data.categoryName });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
