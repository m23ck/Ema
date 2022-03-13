import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MedewerkersService } from 'src/app/components/medewerkers/medewerkers.service';
// const { toast, snackbar } = require('tailwind-toast')


@Component({
  selector: 'app-add-medewerker',
  templateUrl: './add-medewerker.component.html',
  styleUrls: ['./add-medewerker.component.css']
})
export class AddMedewerkerComponent implements OnInit {
  addMedewerkerForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder, private medewerkersService: MedewerkersService) { }

  ngOnInit(): void {
    this.addMedewerkerForm = this.formBuilder.group({
      'voornaam': new FormControl('', [Validators.required]),
      'achternaam': new FormControl('', [Validators.required]),
      'geslacht': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required]),
      'telefoon': new FormControl('', [Validators.required]),
      'straatnaam': new FormControl('', [Validators.required]),
      'huisnummer': new FormControl('', [Validators.required]),
      'district': new FormControl('', [Validators.required]),
      'isActive': new FormControl(true, [Validators.required])
    })
  }

  createMedewerker(){
    this.medewerkersService.addMedewerker(this.addMedewerkerForm.value).subscribe(data => {
      console.log("Medewerker Created")
      // toast()
      // .warning('Medewerker Gecreeerd en geactiveerd!')
      // .with({
      //   shape: 'pill',
      //   duration: 2500,
      //   speed: 1000,
      //   positionX: 'end',
      //   positionY: 'top',
      //   color: 'bg-blue',
      //   fontColor: 'white',
      //   fontTone: 200
      // }).show() //display with all parameters
    },
    err => {
      console.log(err)
      // toast()
      // .warning('An error has occurred!')
      // .with({
      //   shape: 'pill',
      //   duration: 2500,
      //   speed: 1000,
      //   positionX: 'end',
      //   positionY: 'top',
      //   color: 'bg-red',
      //   fontColor: 'white',
      //   fontTone: 200
      // }).show() //display with all parameters
    })
  }

}
