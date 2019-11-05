import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-ramen',
  templateUrl: './ramen.page.html',
  styleUrls: ['./ramen.page.scss'],
})
export class RamenPage implements OnInit {

  IMG_PATH = "../../assets/images/"
  instant_ramen : Recipe;

  showSuggestions() {
    //this placeholder
    // I think an ion-popover is what is needed
  }

  constructor() { 

    this.instant_ramen = new Recipe(
      "Instant Ramen for Adults",
      "You really can't mess this one up. Serves 1 or 2, takes 8 minutes to make.",
      this.IMG_PATH + "Instant Ramen.jpg",
      ["1) Bring 2 cups of water to a boil in a small pot over high heat. Reduce the heat to medium and add the ramen noodles, frozen veggies, turmeric, 1/2 teaspoon of the ramen seasoning, and 1/2 teaspoon salt; stir to combine. Return the water to a boil and cook until the veggies are crisp-tender with some bite, about 3 minutes.",
      "2) Add the chicken and cook until just warmed through, about 1 minute. Remove from the heat and ladle the vegetables, chicken, and noodles into a bowl. Pour the broth over the top and serve."],
      ["1 (3-ounce) package instant ramen (any flavor), seasoning packet reserved", 
       "1 cup mixed fozen vegetables", 
       "1 teaspoon ground turmeric", 
       "1/2 teaspoon Kosher salt", 
       "1 cup sliced cooked chicken breast"]
    )

  }

  ngOnInit() {
  }

}
