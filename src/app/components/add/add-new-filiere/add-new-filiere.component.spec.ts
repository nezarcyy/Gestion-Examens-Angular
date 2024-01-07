import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewFiliereComponent } from './add-new-filiere.component';

describe('AddNewFilireComponent', () => {
  let component: AddNewFiliereComponent;
  let fixture: ComponentFixture<AddNewFiliereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewFiliereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewFiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
