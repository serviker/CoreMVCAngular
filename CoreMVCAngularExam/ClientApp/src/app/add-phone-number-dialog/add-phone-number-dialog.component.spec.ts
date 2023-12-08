import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhoneNumberDialogComponent } from './add-phone-number-dialog.component';

describe('AddPhoneNumberDialogComponent', () => {
  let component: AddPhoneNumberDialogComponent;
  let fixture: ComponentFixture<AddPhoneNumberDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPhoneNumberDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPhoneNumberDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
