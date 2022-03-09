import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedewerkersbeheerComponent } from './medewerkersbeheer.component';

describe('MedewerkersbeheerComponent', () => {
  let component: MedewerkersbeheerComponent;
  let fixture: ComponentFixture<MedewerkersbeheerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedewerkersbeheerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedewerkersbeheerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
