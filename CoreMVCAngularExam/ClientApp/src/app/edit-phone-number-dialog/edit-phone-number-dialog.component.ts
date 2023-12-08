import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-phone-number-dialog',
  templateUrl: './edit-phone-number-dialog.component.html',
  styleUrls: ['./edit-phone-number-dialog.component.css']
})
export class EditPhoneNumberDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditPhoneNumberDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { phoneId: number, numberPhone: string }
  ) { }

  onSaveClick(): void {
    // Здесь вы можете добавить логику сохранения изменений
    this.dialogRef.close({ phoneId: this.data.phoneId, numberPhone: this.data.numberPhone });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}

