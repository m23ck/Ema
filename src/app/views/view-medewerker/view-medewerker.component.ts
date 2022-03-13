import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedewerkersService } from 'src/app/components/medewerkers/medewerkers.service';
import { Medewerker } from 'src/app/Medewerker';

@Component({
  selector: 'app-view-medewerker',
  templateUrl: './view-medewerker.component.html',
  styleUrls: ['./view-medewerker.component.css']
})
export class ViewMedewerkerComponent implements OnInit {

  medewerkerId: number = 0;
  public medewerker!: Medewerker | null;
  constructor(private medewerkersService: MedewerkersService, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    const medewerkerId = this.activatedRoute.params.subscribe(data => {
      this.medewerkerId = data['id'];
    })
    if(this.medewerkerId !== 0){

      this.medewerkersService.viewMedewerker(this.medewerkerId).subscribe(
        (response: Medewerker) => this.medewerker = response
        );
      }
  }

}
