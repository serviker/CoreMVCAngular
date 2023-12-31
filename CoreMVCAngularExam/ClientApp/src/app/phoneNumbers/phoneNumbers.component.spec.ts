import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumbersComponent } from './phoneNumbers.component';

describe('PhoneNumbersComponent', () => {
  let component: PhoneNumbersComponent;
  let fixture: ComponentFixture<PhoneNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhoneNumbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
