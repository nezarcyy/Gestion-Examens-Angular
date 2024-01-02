import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewClasseComponent } from './add-new-classe.component';

describe('AddNewClasseComponent', () => {
  let component: AddNewClasseComponent;
  let fixture: ComponentFixture<AddNewClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewClasseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
