import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-calculator-app',
  templateUrl: './angular-calculator-app.component.html',
  styleUrls: ['./angular-calculator-app.component.css']
})
export class AngularCalculatorAppComponent implements OnInit {
  number1 : number = 0;
  number2 : number = 0;
  result: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  plus(){
    this.result = this.number1 + this.number2
  }

}
