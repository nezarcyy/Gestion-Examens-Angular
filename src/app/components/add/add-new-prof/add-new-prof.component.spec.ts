import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewProfComponent } from './add-new-prof.component';

describe('AddNewProfComponent', () => {
  let component: AddNewProfComponent;
  let fixture: ComponentFixture<AddNewProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewProfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
