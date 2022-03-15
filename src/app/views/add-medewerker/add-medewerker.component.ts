import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MedewerkersService } from 'src/app/components/medewerkers/medewerkers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-medewerker',
  templateUrl: './add-medewerker.component.html',
  styleUrls: ['./add-medewerker.component.css']
})
export class AddMedewerkerComponent implements OnInit {
  addMedewerkerForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder, private medewerkersService: MedewerkersService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    /** spinner starts on init */
  this.spinner.show();
    this.addMedewerkerForm = this.formBuilder.group({
      'voornaam': new FormControl('', [Validators.required]),
      'achternaam': new FormControl('', [Validators.required]),
      'geslacht': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'telefoon': new FormControl('', [Validators.required, Validators.minLength(7)]),
      'straatnaam': new FormControl('', [Validators.required]),
      'huisnummer': new FormControl('', [Validators.required]),
      'district': new FormControl('', [Validators.required]),
      'isActive': new FormControl(true, [Validators.required])
    })
  this.spinner.hide()
  }

  async createMedewerker(){
    this.spinner.show();
    await this.medewerkersService.addMedewerker(this.addMedewerkerForm.value).subscribe(() => {
      console.log("Medewerker Created")
     
        // redirect to medewerkers page showing new value
      //  this.router.navigate(['medewerkers']);
       this.spinner.hide();
       Swal.fire({
        title: 'Success!',
        text: 'Medewerker succesvol toegevoegd!',
        icon: 'success',
        confirmButtonText: 'Doorgaan',
        color: '#0D67A8',
        confirmButtonColor: '#0D67A8'
      }).then((action) => {
        if (action.isConfirmed) return this.router.navigate(['medewerkers']);
        return null
      } )

    },
    err => {
      console.log(err)
      this.spinner.hide();

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
