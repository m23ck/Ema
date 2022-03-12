import { Component, OnInit } from '@angular/core';
import { MedewerkersService } from './medewerkers.service';
import { Medewerker } from 'src/app/Medewerker';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-medewerkers',
  templateUrl: './medewerkers.component.html',
  styleUrls: ['./medewerkers.component.css']
})
export class MedewerkersComponent implements OnInit {

  public medewerkers: Medewerker[] = [];

  constructor(private medewerkersService: MedewerkersService) { }

  ngOnInit(): void {
    this.getMedewerkers();
  }

  getMedewerkers() {
    this.medewerkersService.getMedewerkers().subscribe(
      (response: Medewerker[]) => this.medewerkers = response
    )
  }
}
