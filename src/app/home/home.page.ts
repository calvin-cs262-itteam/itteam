import { Component } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  exampleRecipe : Recipe;

  constructor() {
    this.exampleRecipe = new Recipe("Name", "A very cool description", "path/to/img", ["List", "of", "instructions"], ["List", "of", "ingredients"]);
  }

}
