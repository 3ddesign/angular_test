import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.scss']
})
export class EquationComponent implements OnInit {
  mathForm = new FormGroup({
    a: new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer: new FormControl('')
  })

  constructor() { }

  get a() {
    return this.mathForm.controls.a
  }

  get b() {
    return this.mathForm.controls.b
  }

  ngOnInit(): void {
  }

  private randomNumber(): number {
    return Math.floor(Math.random() * 10);
  }

}
