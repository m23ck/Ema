import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MedewerkersService } from 'src/app/components/medewerkers/medewerkers.service';
import { Medewerker } from 'src/app/Medewerker';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-medewerker',
  templateUrl: './edit-medewerker.component.html',
  styleUrls: ['./edit-medewerker.component.css']
})
export class EditMedewerkerComponent implements OnInit {
  medewerkerId: number = 0;
  medewerker: Medewerker | undefined;
  editMedewerkerForm: FormGroup = new FormGroup({});
  dataLoaded: boolean = false;


  constructor(private medewerkersService: MedewerkersService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private spinner: NgxSpinnerService) { }


  ngOnInit(): void {
    /** spinner starts on init */
  this.spinner.show();
    this.dataLoaded = false;
    const medewerkerId = this.activatedRoute.params.subscribe(data => {
      this.medewerkerId = data['id'];
    })
    // get medewerker details
    if(this.medewerkerId !== 0){
      this.medewerkersService.viewMedewerker(this.medewerkerId)
      .toPromise()
      .then(data => {
        this.medewerker = data;
        console.log(this.medewerker)
        // build the edit form
      this.editMedewerkerForm = this.formBuilder.group({
        'id': new FormControl(this.medewerker?.id, [Validators.required]),
        'voornaam': new FormControl(this.medewerker?.voornaam, [Validators.required]),
        'achternaam': new FormControl(this.medewerker?.achternaam, [Validators.required]),
        'geslacht': new FormControl(this.medewerker?.geslacht, [Validators.required]),
        'email': new FormControl(this.medewerker?.email, [Validators.required, Validators.email]),
        'telefoon': new FormControl(this.medewerker?.telefoon, [Validators.required]),
        'straatnaam': new FormControl(this.medewerker?.straatnaam, [Validators.required]),
        'huisnummer': new FormControl(this.medewerker?.huisnummer, [Validators.required, Validators.minLength(7)]),
        'district': new FormControl(this.medewerker?.district, [Validators.required]),
        'isActive': new FormControl(this.medewerker?.isActive, [Validators.required])
      })
      this.dataLoaded = true;
      console.log(this.editMedewerkerForm);
      this.spinner.hide()   
    })
    .catch(err => {
      console.log(err)
      this.spinner.hide()   
    })
    }
  }

  updateMedewerker(){
    console.log(this.editMedewerkerForm.value)
    this.spinner.show();
    this.medewerkersService.updateMedewerker(this.medewerkerId, this.editMedewerkerForm.value).subscribe(data => {
      console.log("medewerker geupdate")
       // redirect to medewerkers page showing new value
       this.router.navigate(['medewerkers']);
       this.spinner.hide();
       Swal.fire({
         title: 'Success!',
        text: 'Medewerker succesvol toegevoegd!',
        icon: 'success',
        confirmButtonText: 'Doorgaan',
        color: '#0D67A8',
        confirmButtonColor: '#0D67A8'
      })
    },err => {
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
