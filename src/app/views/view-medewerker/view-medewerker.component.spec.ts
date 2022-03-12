import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMedewerkerComponent } from './view-medewerker.component';

describe('ViewMedewerkerComponent', () => {
  let component: ViewMedewerkerComponent;
  let fixture: ComponentFixture<ViewMedewerkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMedewerkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMedewerkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
