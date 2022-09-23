import {Component, OnInit} from '@angular/core';

import {Pet} from './pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet: Pet =
    { name: 'Puppe',
      image: 'https://lingoties.com/sites/default/files/styles/large/public/images/conversation-q/pets.jpg?itok=zAFbmiGj'
    };

  constructor() {
  }

  ngOnInit(): void {
  }

}
