import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Recipe } from '../interfaces/recipe';

@Component({
  selector: 'app-chicken-pot-pie',
  templateUrl: './chicken-pot-pie.page.html',
  styleUrls: ['./chicken-pot-pie.page.scss'],
})
export class ChickenPotPiePage implements OnInit {

  IMG_PATH = "../../assets/images/"
  deconstructed_chicken_pot_pie : Recipe;

  showSuggestions() {
    //this placeholder
    // I think an ion-popover is what is needed
  }

  constructor(private menu: MenuController) { 

    this.deconstructed_chicken_pot_pie = new Recipe(
      "Deconstructed Chicken Pot Pie",
      "A savory and filling deconstructed chicken pot pie recipe. Serves 3 or 4. Takes about 25 minutes",
      this.IMG_PATH + "chicken_pot_pie.jpg",
      ["1) Melt 1 tablespoon of the butter in a medium skillet over medium heat Season the chicken with salt and pepper. When the butter has melted, add the chicken and cook, stirring until browned all over, about 2 minutes. Transfer the chicken to a plate.",
      "2) Melt the remaining 2 tablespoons of butter in the skillet. Add the mushrooms and scallion whites and cook until the mushrooms soften, 3 to 4 minutes. Sprinkle the thyme and flour over the vegetables and stir to coat. Cook for 1 minute to toast the flour a bit, then stir in the broth and cream. Bring to a simmer and add the peas and carrots.",
      "3) Return the chicken and any juices from the plate to the skillet. Simmer until the peas and carrots are heated through and the chicken is fully cooked, about 3 minutes. Add the scallion greens and simmer for 1 minute to wilt them slightly. Finish with a squeeze of lemon juice. Serve with biscuits on top or on the side."],
      ["3 tablespoons unsalted butter",
       "2 boneless, skinless chicken breasts (about 1 1/4 pounds), cut into 1-inch chunks",
       "Kosher salt and freshly ground black pepper", 
       "8 medium white or cremini mushrooms (about 6 ounces), thickly sliced", 
       "1 bunch scallions, chopped, white and green parts kept separate", 
       "1 tablespoon chopped freah thyme leaves, or 1/2 teaspoon dried", 
       "3 tablespoons all-purpose flour", 
       "3/4 cup chicken broth", 
       "1/2 cup heavy cream of half-and-half", 
       "1 cup frozen peas and carrots", 
       "1 lemon wedge", 
       "Biscuits, for serving"]
    )

  }

  openFirst() {
    this.menu.enable(true, 'menu1');
    this.menu.open('menu1');
  }

  ngOnInit() {
  }

  

}
