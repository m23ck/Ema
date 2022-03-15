import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Medewerker } from 'src/app/Medewerker';
import Swal from 'sweetalert2';
import { MedewerkersService } from '../medewerkers/medewerkers.service';

@Component({
  selector: 'app-change-medewerker-status',
  templateUrl: './change-medewerker-status.component.html',
  styleUrls: ['./change-medewerker-status.component.css']
})
export class ChangeMedewerkerStatusComponent implements OnInit {

  medewerkerId: number = 0;
  medewerker: Medewerker | undefined;
  constructor(private medewerkersService: MedewerkersService, private activatedRoute: ActivatedRoute, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
   
    /** spinner starts on init */
  this.spinner.show();
    // get the id and status values from the url
    this.activatedRoute.params.subscribe(data => {
      this.medewerkerId = data['id'];
    }),(err: any) => {
      console.log(err)
    }
    this.spinner.hide()
    
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
        this.spinner.hide();
        Swal.fire({
          title: 'Success!',
        text: 'Medewerker status succesvol veranderd!',
        icon: 'success',
        confirmButtonText: 'Doorgaan',
        color: '#0D67A8',
        confirmButtonColor: '#0D67A8'
      }).then((action) => {
        if (action.isConfirmed) return this.router.navigate(['medewerkers']);
        return null
      } )
      
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
              Swal.fire({
                title: 'Error!',
                text: 'Een probleem heeft zich voorgedaan, probeer het opnieuw!',
                icon: 'error',
                confirmButtonText: 'Doorgaan',
                color: '#EB7E1A',
                confirmButtonColor: '#EB7E1A'
              })
            }
        )
        }
      }
}
