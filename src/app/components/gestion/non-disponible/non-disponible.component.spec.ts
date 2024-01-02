import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonDisponibleComponent } from './non-disponible.component';

describe('NonDisponibleComponent', () => {
  let component: NonDisponibleComponent;
  let fixture: ComponentFixture<NonDisponibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonDisponibleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonDisponibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
