import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent} from '../popover/popover.component';
import { Instruction } from '../instruction';
import { MenuController } from '@ionic/angular';
import { Recipe } from '../interfaces/recipe'

@Component({
  selector: 'app-tuna-casserole',
  templateUrl: './tuna-casserole.page.html',
  styleUrls: ['./tuna-casserole.page.scss'],
})
export class TunaCasserolePage implements OnInit {

  IMG_PATH = "../../assets/images/"
  tuna_casserole : Recipe;

  constructor(private menu: MenuController, private popCont: PopoverController) {

    this.tuna_casserole = new Recipe(
      "Easy Tuna Casserole", 
      "Prep time: 15 minutes, Cook time: 30 minutes, and Total time: 45 minutes",
      this.IMG_PATH + "tuna_casserole.jpg",
      
      ["Preheat oven to 350 F",
       "Combine macaroni, tuna, and soup in 9x13 baking dish",
       "Mix well then top with chedder",
       "Bake until bubbly, 25 minutes",
       "Sprinkle on fried onions then bake for 5 more minutes"],

      ["3 cups, cooked macaroni",
       "1 5 ounce can, drained tuna",
       "1 10.75 ounce can, condenced cream of chicken soup",
       "1 cup, shredded chedder cheese",
       "1 1/2 cups, french fried onions"]
    );

   }

   async showSuggestions(instruct : Instruction) {
    const popover = await this.popCont.create({
        component : PopoverComponent,
        componentProps : {instr : instruct},
        translucent : true
    });
    return await popover.present();
    }
  openFirst() {
    this.menu.enable(true, 'menu6');
    this.menu.open('menu6');
  }

  onRateChange(event) {
    console.log('Your rate:', event);
  }

  ngOnInit() {
  }

}
