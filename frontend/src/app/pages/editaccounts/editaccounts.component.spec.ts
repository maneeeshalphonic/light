import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaccountsComponent } from './editaccounts.component';

describe('EditaccountsComponent', () => {
  let component: EditaccountsComponent;
  let fixture: ComponentFixture<EditaccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
