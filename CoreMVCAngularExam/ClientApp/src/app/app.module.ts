import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { PhoneNumbersComponent } from './phoneNumbers/phoneNumbers.component';
import { PhoneNumberDataService } from './phoneNumbers/phoneNumbersdata.service';
import { EditPhoneNumberDialogComponent } from './edit-phone-number-dialog/edit-phone-number-dialog.component';
import { AddPhoneNumberDialogComponent } from './add-phone-number-dialog/add-phone-number-dialog.component';


import { ContactsComponent } from './contacts/contacts.component';
import { ContactDataService } from './contacts/contactdata.service';
import { AddContactDialogComponent } from './add-contact-dialog/add-contact-dialog.component';
import { EditContactDialogComponent } from './edit-contact-dialog/edit-contact-dialog.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CategoriesComponent } from './categories/categories.component';
import { CategoryDataService } from './categories/categorydata.service';
import { AddCategoryDialogComponent } from './categories/addNewCategory.component';

import { EditCategoryDialogComponent } from './edit-category-dialog/edit-category-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';


@NgModule({
  declarations: [
    //MatListModule,
    //MatIconModule,
    
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PhoneNumbersComponent,
    ContactsComponent,
    CategoriesComponent,
    AddCategoryDialogComponent,
    EditCategoryDialogComponent,
    EditPhoneNumberDialogComponent,
    AddPhoneNumberDialogComponent,
    AddContactDialogComponent,
    EditContactDialogComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'phoneNumbers', component: PhoneNumbersComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'categories', component: CategoriesComponent },
    ]),
    NoopAnimationsModule
  ],
  providers: [PhoneNumberDataService, ContactDataService, CategoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
