import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDepartementComponent } from './add-new-departement.component';

describe('AddNewDepartementComponent', () => {
  let component: AddNewDepartementComponent;
  let fixture: ComponentFixture<AddNewDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewDepartementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
