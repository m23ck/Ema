import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medewerker } from 'src/app/Medewerker';
import { MedewerkersService } from '../medewerkers/medewerkers.service';

@Component({
  selector: 'app-change-medewerker-status',
  templateUrl: './change-medewerker-status.component.html',
  styleUrls: ['./change-medewerker-status.component.css']
})
export class ChangeMedewerkerStatusComponent implements OnInit {
  medewerkerId: number = 0;
  medewerker: Medewerker | undefined;
  constructor(private medewerkersService: MedewerkersService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // get the id and status values from the url
    this.activatedRoute.params.subscribe(data => {
      this.medewerkerId = data['id'];
    }),(err: any) => {
      console.log(err)
    }

    // console.log(this.medewerkerId)

    // get the medewerker object
    this.medewerkersService.viewMedewerker(this.medewerkerId)
      .toPromise()
      .then(data => {
        this.medewerker = data;
        // console.log(this.medewerker)
        this.updateMedewerkerStatus()
      })
      .then(data => {
        // redirect to medewerkers page showing new value
        setTimeout(() => {
        this.router.navigate(['medewerkers']);
      }, 1500);
      })
      }
      async updateMedewerkerStatus(){
        // change the status of medewerker 
        if(this.medewerker){
          this.medewerker.isActive = !this.medewerker.isActive;
          // do the patch request to save the new value
          await this.medewerkersService.updateMedewerker(this.medewerkerId, this.medewerker).subscribe(data => {
            // console.log("medewerker status geupdate")
          },err => {
              console.log(err)
            }
        )
        }
      }
}
