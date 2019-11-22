import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent} from '../popover/popover.component';
import { Instruction } from '../instruction';
import { MenuController } from '@ionic/angular';
import { Recipe } from '../interfaces/recipe';

@Component({
  selector: 'app-pretzel',
  templateUrl: './pretzel.page.html',
  styleUrls: ['./pretzel.page.scss'],
})
export class PretzelPage implements OnInit {

  IMG_PATH = "../../assets/images/"
  pretzel : Recipe;

  constructor(private menu: MenuController, private popCont: PopoverController) { 

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

  async showSuggestions(instr : Instruction) {
    const popover = await this.popCont.create({
        component : PopoverComponent,
        componentProps : {instr : instr},
        translucent : true
    });
    return await popover.present();
    }
  openFirst() {
    this.menu.enable(true, 'menu4');
    this.menu.open('menu4');
  }

  ngOnInit() {
  }

}
