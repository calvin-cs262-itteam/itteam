import { Component } from '@angular/core';
import { Recipe } from '../recipe';
import { R3ExpressionFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
/**import from '../recipe.spec.ts';
*/
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  IMG_PATH = "../../assets/images/"

  exampleRecipe : Recipe;
  example : Recipe;
  pretzel : Recipe;
  deconstucted_chicken_pot_pie : Recipe;

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

    this.deconstucted_chicken_pot_pie = new Recipe(
      "Deconstucted Chicken Pot Pie",
      "A savory and filling deconstucted chicken pot pie recipe",
      this.IMG_PATH + "chicken_pot_pie.jpg",
      ["1) Melt 1 tablespoon of the butter in a medium skillet over medium heat Season the chicken with salt and pepper. When the butter has melted, add the chicken and cook, stirring until browned all over, about 2 minutes. Transfer the chicken to a plate.",
      "2) Melt the remaining 2 tablespoons of butter in the skillet. Add the mushrooms and scallion whites and cook until the mushrooms soften, 3 to 4 minutes. Sprinkle the thyme and flour over the vegetables and stir to coat. Cook for 1 minute to toast the flour a bit, then stir in the broth and cream. Bring to a simmer and add the peas and carrots.",
      "3) Return the chicken and any juices from the plate to the skillet. Simmer until the peas and carrots are heated through and the chicken is fully cooked, about 3 minutes. Add the scallion greens and simmer for 1 minute to wilt them slightly. Finish with a squeeze of lemon juice. Serve with biscuits on top or on the side."],
      ["3 tablespoons unsalted butter", " 2 boneless, skinless chicken breasts (about 1 1/4 pounds), cut into 1-inch chunks", "Kosher salt and freshly ground black pepper", "8 medium white or cremini mushrooms (about 6 ounces), thickly sliced", "1 bunch scallions, chopped, white and green parts kept separate", "1 tablespoon chopped freah thyme leaves, or 1/2 teaspoon dried", "3 tablespoons all-purpose flour", "3/4 cup chicken broth", "1/2 cup heavy cream of half-and-half", "1 cup frozen peas and carrots", "1 lemon wedge", "Biscuits, for serving"]
    )

    this.pretzel = new Recipe(
      "Soft Pretzels", 
      "A simple homemade soft pretzel recipe. It takes about 40 minutes in total. This makes 12 pretzels.",
      this.IMG_PATH + "pretzels.jpg",

      ["Whisk yeast into warm water. Sit for 1 minute",
       "Whisk in salt, brown sugar, and melted butter then 1 cup of flour",
       "Mix until dough is thick",
       "Add 3/4-ish more flour until dough not sticky",
       "Put dough on floured serface and knead for 3 minuts into a ball",
       "Cover lightly with towel for 10 minutes",
       "Preheat oven to 400F and set out 2 covered baking sheets",
       "Cut dough into 1/3 cup sessions",
       "Roll into 20-22 inch rope then make pretzel shape",
       "Boil baking soda water in large pot",
       "Drop 1-2 pretzels in for 20-30 seconds then put on baking sheet",
       "Bake for 12-15 minutes"],

      ["1 1/2 cups, warm water",
       "2 1/4 teaspoons, active dry or instant yeast",
       "1 teaspoon, salt",
       "1 tablespoon, brown sugar",
       "1 tablespoon, unsalted butter (melted)",
       "3 3/4 - 4 cups, all purpose flour",
       "1/2 cup baking soda in 9 cups water"]
    );
  }

}
