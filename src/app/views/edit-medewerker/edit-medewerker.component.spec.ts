import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMedewerkerComponent } from './edit-medewerker.component';

describe('EditMedewerkerComponent', () => {
  let component: EditMedewerkerComponent;
  let fixture: ComponentFixture<EditMedewerkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMedewerkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMedewerkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
