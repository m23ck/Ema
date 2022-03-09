import { Component, OnInit } from '@angular/core';
import { Medewerkers } from 'src/app/mock-medewerkers';
import { Medewerker } from 'src/app/Medewerker';

@Component({
  selector: 'app-medewerkers',
  templateUrl: './medewerkers.component.html',
  styleUrls: ['./medewerkers.component.css']
})
export class MedewerkersComponent implements OnInit {

  medewerkers: Medewerker[] = Medewerkers;


  constructor() { }

  ngOnInit(): void {
  }

}
