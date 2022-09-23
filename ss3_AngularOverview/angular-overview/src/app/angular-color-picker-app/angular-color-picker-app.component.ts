import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-angular-color-picker-app',
  templateUrl: './angular-color-picker-app.component.html',
  styleUrls: ['./angular-color-picker-app.component.css']
})
export class AngularColorPickerAppComponent implements OnInit {

  colors = [
    {id: 1, name: '#FF0000'},
    {id: 2, name: '#0000FF'},
    {id: 3, name: '#FFFF00'},
    {id: 4, name: '#00FFFF'},
    {id: 5, name: '#FF00FF'}
  ];
  code: string = this.colors[0].name;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeColorValue(code: string) {
    this.code = code;
  }
}
