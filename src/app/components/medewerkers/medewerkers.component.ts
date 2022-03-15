import { Component, OnInit, ViewChild } from '@angular/core';
import { MedewerkersService } from './medewerkers.service';
import { Medewerker } from 'src/app/Medewerker';
import {Table, TableModule} from 'primeng/table';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-medewerkers',
  templateUrl: './medewerkers.component.html',
  styleUrls: ['./medewerkers.component.css']
})
export class MedewerkersComponent implements OnInit {

  public medewerkers: Medewerker[] = [];
  medewerkerId: number = 0;
  medewerker: Medewerker | undefined;
  cols!: any[];
  @ViewChild('dt') dt: Table | undefined;

  constructor(private medewerkersService: MedewerkersService, private activatedRoute: ActivatedRoute, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    /** spinner starts on init */
  this.spinner.show();
    this.getMedewerkers();
    this.activatedRoute.params.subscribe(data => {
      this.medewerkerId = data['id'];
      this.medewerker = data['medewerker'];
      this.spinner.hide();
      
    })

    this.cols = [
      { field: 'voornaam', header: 'Voornaam' },
      { field: 'achternaam', header: 'Achternaam' },
      { field: 'geslacht', header: 'Geslacht' },
      { field: 'email', header: 'Email' },
      { field: 'telefoon', header: 'Telefoon' },
      { field: 'straatnaam', header: 'Straatnaam' },
      { field: 'huisnummer', header: '#' },
      { field: 'district', header: 'District' },
      { field: 'actief', header: 'Actief' }
  ];
  }
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  getMedewerkers() {
    this.medewerkersService.getMedewerkers().subscribe(
      (response: Medewerker[]) => this.medewerkers = response
    )
  }
}
