import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Recipe } from '../interfaces/recipe';

@Component({
  selector: 'app-eggs-benedict',
  templateUrl: './eggs-benedict.page.html',
  styleUrls: ['./eggs-benedict.page.scss'],
})
export class EggsBenedictPage implements OnInit {

  IMG_PATH = '../../assets/images/'
  eggs_benedict : Recipe;

  showSuggestions() {
    //this placeholder
    // I think an ion-popover is what is needed
  }

  constructor(private menu: MenuController) {

    this.eggs_benedict = new Recipe(
      'Eggs Benedict',
      'A fresh take on the classic breakfast. Makes 4 servings. Takes 35 minutes.',
      this.IMG_PATH + 'eggs_benedict.jpg',

      ['Melt 12 tablespoons of butter in small pot till foamy, 3-4 minutes',
       'Wisk egg yolks with 2 teaspoons water then add 2 tablespoons melted butter till incorporated',
       'Add lemon juice and cayenne then season with salt and pepper',
       'Set sauce asside in coverd bowl',
       'Simmer (not boil) about 3 inches of water in medium pot with vinegar and salt',
       'Stir in clockwise motion',
       'For up to 4 eggs,gently crack 1 egg into center allowing water to swirl until yolk covered then next egg',
       'Continue poaching for about 4-5 minutes then set aside',
       'Toast english muffins',
       'Cook canadian bacon/ham in skillet for about 6 minuts on medium-high heat',
       'Butter muffin, top with meat, poached egg, then sauce',
       'Season with chives, dill, salt and pepper'],

      ['14 tablespoons, unsalted butter',
       '3 large egg yolks',
       '1 1/2 teaspoons, lemon juce',
       '1/4 teaspoon, cayenne or hot paprika',
       '1 tablespoon, white distilled vinegar',
       '8 eggs',
       '4 split english muffins',
       '8 slices of canadian bacon or ham',
       '1/4 cup chives',
       '2 tablespoons, chopped dill/tarragon/parsley',
       'salt and ground pepper']
    );

  }

  openFirst() {
    this.menu.enable(true, 'menu2');
    this.menu.open('menu2');
  }

  ngOnInit() {
  }

}
