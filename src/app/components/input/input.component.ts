import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input()
  name!: string;
  
  @Input()
  formControlName!: string;

  @Input()
  type!: string;


  constructor() { }

  ngOnInit(): void {
  }

}
