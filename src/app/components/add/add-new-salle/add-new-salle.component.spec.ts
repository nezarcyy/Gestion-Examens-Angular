import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewSalleComponent } from './add-new-salle.component';

describe('AddNewSalleComponent', () => {
  let component: AddNewSalleComponent;
  let fixture: ComponentFixture<AddNewSalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewSalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
