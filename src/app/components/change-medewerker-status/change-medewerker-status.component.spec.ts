import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeMedewerkerStatusComponent } from './change-medewerker-status.component';

describe('ChangeMedewerkerStatusComponent', () => {
  let component: ChangeMedewerkerStatusComponent;
  let fixture: ComponentFixture<ChangeMedewerkerStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeMedewerkerStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeMedewerkerStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
