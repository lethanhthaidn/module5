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
  title = 'Color Picker';
  colorCode = '#387c73';
  fontSize: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeColorValue(code: string) {
    this.code = code;
  }
  // public getColor(red: string, green: string, blue: string) {
  //   const redNumber: number = Number(red);
  //   const greenNumber: number = Number(green);
  //   const blueNumber: number = Number(blue);
  //
  //   this.colorCode = this.rgbToHex(redNumber,greenNumber,blueNumber);
  //   console.log(this.colorCode);
  // }
  //
  // changeFont(value: any) {
  //   this.fontSize = value;
  // }
  //
  // rgbToHex = (r : number, g: number, b: number) =>
  //   "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
