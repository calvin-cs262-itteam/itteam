import { Component } from '@angular/core';
import { Recipe } from '../recipe';
import { R3ExpressionFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  exampleRecipe : Recipe;
  example : Recipe;
  pretzel : Recipe;

  constructor() {
    this.exampleRecipe = new Recipe(
      "Name", 
      "A very cool description", 
      "path/to/img", 
      ["List", "of", "instructions"], 
      ["List", "of", "ingredients"]
      );

    this.example = new Recipe(
      "", 
      "",
      "",
      [],
      []
    )

    this.pretzel = new Recipe(
      "Soft Pretzels", 
      "A simple homemade soft pretzel recipe. It takes about 40 minutes in total. This makes 12 pretzels.",
      "",
      [],
      []
    );
  }

}
