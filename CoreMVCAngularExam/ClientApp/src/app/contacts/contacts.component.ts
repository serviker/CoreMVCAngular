import { Component, OnInit } from '@angular/core';
import { ContactDataService, Contact } from './contactdata.service';
import { MatDialog } from '@angular/material/dialog';
import { AddContactDialogComponent } from '../add-contact-dialog/add-contact-dialog.component';
import { EditContactDialogComponent } from '../edit-contact-dialog/edit-contact-dialog.component';
import { PhoneNumberDataService } from '../phoneNumbers/phoneNumbersdata.service';
import { CategoryDataService } from '../categories/categorydata.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  public contacts: Contact[] | undefined;
  public showAddForm = false;
  phoneNumbers: any[] | undefined;
  categories: any[] | undefined;
  public newContact: Contact = {
      firstName: '', lastName: '', categoryId: 0, phoneId: 0,
      contactId: 0
  };
    contactForm: any;
  public filteredContacts: Contact[] | undefined;
  public searchQuery: string = '';

  constructor(private contactDataSrv: ContactDataService, private dialog: MatDialog, private phoneNumberDataService: PhoneNumberDataService,
    private categoryDataService: CategoryDataService, private formBuilder: FormBuilder ) {
    }
    
  ngOnInit() {
    this.contacts = this.contactDataSrv.contacts;
    this.showAll();
    this.initializeForm();
    this.getPhoneNumbers();
    this.getCategories();
    this.contacts = this.contactDataSrv.contacts;
    this.filteredContacts = this.contacts;
  }

  searchContacts(): void {
    if (this.searchQuery.trim() === '') {
      this.filteredContacts = this.contacts;
      return;
    }


    this.filteredContacts = this.contacts?.filter(contact =>
      contact.firstName!.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      contact.lastName!.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      this.getCategoryById(contact.categoryId)?.categoryName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      this.getPhoneNumberById(contact.phoneId)?.numberPhone.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  
    console.log('Данные резалта:', this.filteredContacts );
  }

  initializeForm(): void {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneId: ['', Validators.required],
      categoryId: ['', Validators.required],
    });
  }
  getPhoneNumberById(phoneId: number | undefined): any {
    return this.phoneNumbers?.find(phone => phone.phoneId === phoneId);
  }

  getCategoryById(categoryId: number | undefined): any {
    return this.categories?.find(category => category.categoryId === categoryId);
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

  showAll() {
    this.contactDataSrv.showAll();
  }

  addContact(): void {
    const dialogRef = this.dialog.open(AddContactDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Данные резалта:', result);
      if (result) {
        console.log('Данные if(резалт):', result);
        this.contactDataSrv.addContact(result).subscribe(
          response => {
            console.log('Данные успешно добавлены:', response);
            // После успешного добавления контакта, обновляем данные на странице.
            this.showAll();
          },
          error => {
            console.error('Не удалось добавить данные:', error);
          },
          () => {
            console.log('Диалог успешно закрыт!');
          }
        );
      } else {
        console.log('Диалог закрыт без данных');
      }
    });
  }
 
  updateContact(contactId: number | undefined, firstName: string | undefined, lastName: string | undefined, categoryId: number | undefined, phoneId: number | undefined): void {
    if (contactId === undefined || categoryId === undefined || phoneId === undefined || !firstName || !lastName) {
      return;
    }

    const dialogRef = this.dialog.open(EditContactDialogComponent, {
      width: '400px',
      data: { editedContactId: contactId, contact: { contactId, firstName, lastName, categoryId, phoneId } },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Данные из диалога:', result);
        // Обновите контакт в this.contactDataSrv после закрытия диалога
        this.contactDataSrv.updateContact(result.contactId, result.firstName, result.lastName, result.categoryId, result.phoneId)
          .subscribe(response => {
            console.log('Contact updated successfully:', response);
            this.showAll();
            // Возможно, вы хотите выполнить какие-то дополнительные действия после успешного обновления
          }, error => {
            console.error('Error updating contact:', error);
            // Обработайте ошибку, если это необходимо
          });

      } else {
        console.log('Диалог закрыт без данных');
      }
      
    });
  }

  deleteContact(contactId: number): void {

    this.contactDataSrv.deleteContact(contactId);
  }
}
