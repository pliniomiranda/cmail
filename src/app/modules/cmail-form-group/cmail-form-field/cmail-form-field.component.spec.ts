import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmailFormFieldComponent } from './cmail-form-field.component';

describe('CmailFormFieldComponent', () => {
  let component: CmailFormFieldComponent;
  let fixture: ComponentFixture<CmailFormFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmailFormFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmailFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
