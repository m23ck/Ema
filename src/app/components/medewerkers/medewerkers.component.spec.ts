import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedewerkersComponent } from './medewerkers.component';

describe('MedewerkersComponent', () => {
  let component: MedewerkersComponent;
  let fixture: ComponentFixture<MedewerkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedewerkersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedewerkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
