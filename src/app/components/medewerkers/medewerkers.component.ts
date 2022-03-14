import { Component, OnInit } from '@angular/core';
import { MedewerkersService } from './medewerkers.service';
import { Medewerker } from 'src/app/Medewerker';
import {TableModule} from 'primeng/table';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private medewerkersService: MedewerkersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMedewerkers();
    const medewerkerId = this.activatedRoute.params.subscribe(data => {
      this.medewerkerId = data['id'];
      this.medewerker = data['medewerker'];
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

  getMedewerkers() {
    this.medewerkersService.getMedewerkers().subscribe(
      (response: Medewerker[]) => this.medewerkers = response
    )
  }

  // changeMedewerkerStatus(){
  //   this.medewerkersService.updateMedewerker(this.medewerkerId, this.medewerker ).subscribe(data => {
  //     console.log("medewerker geupdate")
  //   },err => {
  //       console.log(err)
  //     }
  // )
  // }
}
