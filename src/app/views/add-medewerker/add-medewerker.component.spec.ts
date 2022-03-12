import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedewerkerComponent } from './add-medewerker.component';

describe('AddMedewerkerComponent', () => {
  let component: AddMedewerkerComponent;
  let fixture: ComponentFixture<AddMedewerkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMedewerkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedewerkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
