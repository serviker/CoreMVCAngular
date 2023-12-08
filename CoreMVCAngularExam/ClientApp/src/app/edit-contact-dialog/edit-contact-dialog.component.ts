import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../contacts/contactdata.service';
import { PhoneNumberDataService } from '../phoneNumbers/phoneNumbersdata.service';
import { CategoryDataService } from '../categories/categorydata.service';

@Component({
  selector: 'app-edit-contact-dialog',
  templateUrl: './edit-contact-dialog.component.html',
  styleUrls: ['./edit-contact-dialog.component.css']
})
export class EditContactDialogComponent {
  public contactForm!: FormGroup;
  public editedContact: Contact | undefined;
  contact: any;
  phoneNumbers: any[] | undefined; // Замените any на реальный тип данных
  categories: any[] | undefined; // Замените any на реальный тип данных

  constructor(
    private dialogRef: MatDialogRef<EditContactDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { contact: any; editedContact: Contact },
    private phoneNumberDataService: PhoneNumberDataService,
    private categoryDataService: CategoryDataService
  ) { }

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

  initializeForm(): void {
    this.contactForm = this.formBuilder.group({
      contactId: [this.data.contact?.contactId || ''],
      firstName: [this.data.contact?.firstName || ''],
      lastName: [this.data.contact?.lastName || ''],
      categoryId: [this.data.contact?.categoryId || ''],
      phoneId: [this.data.contact?.phoneId || ''],
    });
  
    

    console.log("console.log:contactForm", this.contactForm);
    // Убедимся, что данные переданы и установим значения формы
   this.editedContact = this.data.editedContact;
    console.log("console.log:editedContact",this.editedContact);
    if (this.editedContact) {
      this.contactForm.patchValue(this.editedContact);
    }
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.dialogRef.close(this.contactForm.value);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
