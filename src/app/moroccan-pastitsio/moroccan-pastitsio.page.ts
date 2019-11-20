import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Recipe } from '../interfaces/recipe';

@Component({
  selector: 'app-moroccan-pastitsio',
  templateUrl: './moroccan-pastitsio.page.html',
  styleUrls: ['./moroccan-pastitsio.page.scss'],
})
export class MoroccanPastitsioPage implements OnInit {

  IMG_PATH = "../../assets/images/"
  moroccan_pastitsio : Recipe;

  showSuggestions() {
    //this placeholder
    // I think an ion-popover is what is needed
  }

  constructor(private menu: MenuController) { 

    this.moroccan_pastitsio = new Recipe(
      "Moroccan Pastisio", 
      "Moroccan spiced pastitsio with lamb and feta. Makes 10 servings. Takes 1 hour and 40 minutes total",
      this.IMG_PATH + "moroccanPastitsio.jpg",
      
      ["In large skillet, heat oil on medium high heat",
       "Add onion and garlic and saute until soft, 5 minutes",
       "Add lamb and cook until brown, 8 minutes",
       "Stir in tomatoes with juice, mintm ras-el-hanout, tomato paste, 2 1/2 teaspoons cumin, and cinnamon",
       "Bring to boil then reduce heat to medium low and simmer for 15-18 minutes",
       "Season with salt and pepper",
       "Bring 2 cups milk to simmer in medium saucepan then cover and set aside",
       "Melt 6 tablespoons butter in large saucepan medium heat",
       "Wisk in flour",
       "Reduce heat to medium-low and cook til pale golden, wisk often, 3-4 minutes",
       "Wisk in warm milk",
       "Wisk 1 cup milk and 3 egg yolks in medium bowl then wisk into sauce",
       "Wisk in feta and 1/2 teaspoon cumin",
       "Bring sauce to boil, wisk often",
       "Reduce heat to medium-low and simmer while breaking up cheese, 5 minutes",
       "Season with salt and pepper",
       "Preheat oven to 400 F",
       "Butter deep 14 cup baking dish",
       "Cook pasta in large pot and return to pot once drained",
       "Mix in 2 tablespoons butter, egg whites, and 1/4 cup parmesan",
       "In dish spread 4 cups pasta, lamb mixture, remaining pasta, sauce, then 1/4 cup parmesan",
       "Place dish on baking sheet",
       "Bake for about 40 minutes then let stand for 5-10 minutes"
      ],

      ["2 tablespoons, olive oil",
       "1 1/4 cups, chopped red onion",
       "1 pound ground lamb",
       "1 28 ounce can dried tomatos in juce",
       "2 tablespoons dried mint",
       "1 1/2 tablespoons, ras-el-hanout",
       "1 tablespoon, tomato paste",
       "3 teaspoons ground cumin",
       "1 teaspoon, ground cinnamon",
       "3 cups, whole milk",
       "8 tablespoons, unsalted butter",
       "6 tablespoons, flour",
       "3 large eggs, separated",
       "6 ounces, crumbled feta cheese",
       "1 pound, penne rigate",
       "1/2 cup, grated parmesan cheese"]
    );

  }

  openFirst() {
    this.menu.enable(true, 'menu3');
    this.menu.open('menu3');
  }

  ngOnInit() {
  }

}
