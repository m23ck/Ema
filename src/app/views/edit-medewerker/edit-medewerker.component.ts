import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MedewerkersService } from 'src/app/components/medewerkers/medewerkers.service';
import { Medewerker } from 'src/app/Medewerker';

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


  constructor(private medewerkersService: MedewerkersService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) { }


  ngOnInit(): void {
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
        'voornaam': new FormControl(this.medewerker?.voornaam),
        'achternaam': new FormControl(this.medewerker?.achternaam),
        'geslacht': new FormControl(this.medewerker?.geslacht),
        'email': new FormControl(this.medewerker?.email),
        'telefoon': new FormControl(this.medewerker?.telefoon),
        'straatnaam': new FormControl(this.medewerker?.straatnaam),
        'huisnummer': new FormControl(this.medewerker?.huisnummer),
        'district': new FormControl(this.medewerker?.district),
        'isActive': new FormControl(this.medewerker?.isActive)
      })
      this.dataLoaded = true;
    })
.catch(err => {
      console.log(err)
    })
      
    }
  }

  updateMedewerker(){
    this.medewerkersService.updateMedewerker(this.medewerkerId, this.editMedewerkerForm.value).subscribe(data => {
      console.log("medewerker geupdate")
    },err => {
        console.log(err)
      }
  )
  }

}
