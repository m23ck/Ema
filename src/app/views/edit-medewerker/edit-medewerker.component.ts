import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedewerkersService } from 'src/app/components/medewerkers/medewerkers.service';

@Component({
  selector: 'app-edit-medewerker',
  templateUrl: './edit-medewerker.component.html',
  styleUrls: ['./edit-medewerker.component.css']
})
export class EditMedewerkerComponent implements OnInit {
  medewerkerId: string = '';
  constructor(private medewerkersService: MedewerkersService, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    const medewerkerId = this.activatedRoute.params.subscribe(data => {
      this.medewerkerId = data['id'];
    })

    this.medewerkersService.viewMedewerker(this.medewerkerId).subscribe(data => {
      console.log(data);
    });
  }

}
