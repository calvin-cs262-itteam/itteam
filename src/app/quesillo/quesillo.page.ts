import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Recipe } from '../interfaces/recipe';

@Component({
  selector: 'app-quesillo',
  templateUrl: './quesillo.page.html',
  styleUrls: ['./quesillo.page.scss'],
})
export class QuesilloPage implements OnInit {

  IMG_PATH = "../../assets/images/"
  quesillo : Recipe;

  showSuggestions() {
    //this placeholder
    // I think an ion-popover is what is needed
  }

  constructor(private menu: MenuController) { 
    this.quesillo = new Recipe(
      "Quesillo",
      " A dish from Nicaragua typically made from a thick corn tortilla wrapped around soft cheese (with the same name and of consistency similar to mozzarella cheese), pickled onions, and a sauce of sour cream or liquid cheese and vinegar.",
      this.IMG_PATH + "quesillo.jpg",
      ["Instructions: ",
        "1) Warp the tortilla around the cheese.",
      "2) Add pickled onions in vinegar.",
      "3) Top off with salt and a dash of sour cream.",
      "4) Serve!",
      ],
      [
        "A corn tortilla",
       "Cheese",
       "Finely chopped onions pickled in vinegar ", 
       "Salt", 
       "Sour Cream",
       ]
    )
  }

  openFirst() {
    this.menu.enable(true, 'menu1');
    this.menu.open('menu1');
  }

  ngOnInit() {
  }

}
