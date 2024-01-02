import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewFilireComponent } from './add-new-filire.component';

describe('AddNewFilireComponent', () => {
  let component: AddNewFilireComponent;
  let fixture: ComponentFixture<AddNewFilireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewFilireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewFilireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
