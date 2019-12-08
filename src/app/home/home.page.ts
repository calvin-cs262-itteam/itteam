import { Component } from '@angular/core';
import { Recipe } from '../interfaces/recipe';
import { R3ExpressionFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
import { MenuController } from '@ionic/angular';
import { RecipeService } from '../SQLITE/recipe.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  IMG_PATH = '../../assets/images/';

  exampleRecipe: Recipe;
  example: Recipe;
  pretzel: Recipe;
  deconstructedChickenPotPie: Recipe;
  eggsBenedict: Recipe;
  instantRamen: Recipe;
  moroccanPastitsio: Recipe;
  tunaCasserole: Recipe;
  cheesecake: Recipe;
  quesillo: Recipe;


  constructor(private menu: MenuController, public db: RecipeService) {

    console.log('1');

    db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        db.delete(1);
        db.create(1,'Jeff', 'Soup', 'yummy saucy soup', 'soup.jpg');
        let itemOne  = db.get(1);
        // let itemList = db.get(0);
        console.log(itemOne)
        // console.log(itemOne.toString());
        
    }
    })
    
    this.exampleRecipe = new Recipe(
      'Name',
      'A very cool description',
      'path/to/img',
      ['List', 'of', 'instructions'],
      ['List', 'of', 'ingredients']
      );

    this.example = new Recipe(
      '',
      '',
      this.IMG_PATH + '',
      [],
      []
    );

    this.deconstructedChickenPotPie = new Recipe(
      'Deconstructed Chicken Pot Pie',
      'A savory and filling deconstructed chicken pot pie recipe. Serves 3 or 4. Takes about 25 minutes',
      this.IMG_PATH + 'chickenPotPie.jpg',
      ['1) Melt 1 tablespoon of the butter in a medium skillet over medium heat Season the chicken with salt and pepper. When the butter has melted, add the chicken and cook, stirring until browned all over, about 2 minutes. Transfer the chicken to a plate.',
      '2) Melt the remaining 2 tablespoons of butter in the skillet. Add the mushrooms and scallion whites and cook until the mushrooms soften, 3 to 4 minutes. Sprinkle the thyme and flour over the vegetables and stir to coat. Cook for 1 minute to toast the flour a bit, then stir in the broth and cream. Bring to a simmer and add the peas and carrots.',
      '3) Return the chicken and any juices from the plate to the skillet. Simmer until the peas and carrots are heated through and the chicken is fully cooked, about 3 minutes. Add the scallion greens and simmer for 1 minute to wilt them slightly. Finish with a squeeze of lemon juice. Serve with biscuits on top or on the side.'],
      ['3 tablespoons unsalted butter',
       '2 boneless, skinless chicken breasts (about 1 1/4 pounds), cut into 1-inch chunks',
       'Kosher salt and freshly ground black pepper',
       '8 medium white or cremini mushrooms (about 6 ounces), thickly sliced',
       '1 bunch scallions, chopped, white and green parts kept separate',
       '1 tablespoon chopped freah thyme leaves, or 1/2 teaspoon dried',
       '3 tablespoons all-purpose flour',
       '3/4 cup chicken broth',
       '1/2 cup heavy cream of half-and-half',
       '1 cup frozen peas and carrots',
       '1 lemon wedge',
       'Biscuits, for serving']
    )

    this.instantRamen = new Recipe(
      'Instant Ramen for Adults',
      'You really can\'t mess this one up. Serves 1 or 2, takes 8 minutes to make.',
      this.IMG_PATH + 'Instant Ramen.jpg',
      ['1) Bring 2 cups of water to a boil in a small pot over high heat. Reduce the heat to medium and add the ramen noodles, frozen veggies, turmeric, 1/2 teaspoon of the ramen seasoning, and 1/2 teaspoon salt; stir to combine. Return the water to a boil and cook until the veggies are crisp-tender with some bite, about 3 minutes.',
      '2) Add the chicken and cook until just warmed through, about 1 minute. Remove from the heat and ladle the vegetables, chicken, and noodles into a bowl. Pour the broth over the top and serve.'],
      ['1 (3-ounce) package instant ramen (any flavor), seasoning packet reserved',
       '1 cup mixed frozen vegetables',
       '1 teaspoon ground turmeric',
       '1/2 teaspoon Kosher salt',
       '1 cup sliced cooked chicken breast']
    )

    this.pretzel = new Recipe(
      'Soft Pretzels',
      'A simple homemade soft pretzel recipe. It takes about 40 minutes in total. This makes 12 pretzels.',
      this.IMG_PATH + 'pretzels.jpg',

      ['Whisk yeast into warm water. Sit for 1 minute',
       'Whisk in salt, brown sugar, and melted butter then 1 cup of flour',
       'Mix until dough is thick',
       'Add 3/4-ish more flour until dough not sticky',
       'Put dough on floured surface and knead for 3 minutes into a ball',
       'Cover lightly with towel for 10 minutes',
       'Preheat oven to 400F and set out 2 covered baking sheets',
       'Cut dough into 1/3 cup sessions',
       'Roll into 20-22 inch rope then make pretzel shape',
       'Boil baking soda water in large pot',
       'Drop 1-2 pretzels in for 20-30 seconds then put on baking sheet',
       'Bake for 12-15 minutes'],

      ['1 1/2 cups, warm water',
       '2 1/4 teaspoons, active dry or instant yeast',
       '1 teaspoon, salt',
       '1 tablespoon, brown sugar',
       '1 tablespoon, unsalted butter (melted)',
       '3 3/4 - 4 cups, all purpose flour',
       '1/2 cup baking soda in 9 cups water']
    );

    this.eggsBenedict = new Recipe(
      'Eggs Benedict',
      'Creates 4 servings. Takes 35 minutes.',
      this.IMG_PATH + 'eggsBenedict.jpg',

      ['Melt 12 tablespoons of butter in small pot till foamy, 3-4 minutes',
       'Whisk egg yolks with 2 teaspoons water then add 2 tablespoons melted butter till incorporated',
       'Add lemon juice and cayenne then season with salt and pepper',
       'Set sauce aside in covered bowl',
       'Simmer (not boil) about 3 inches of water in medium pot with vinegar and salt',
       'Stir in clockwise motion',
       'For up to 4 eggs,gently crack 1 egg into center allowing water to swirl until yolk covered then next egg',
       'Continue poaching for about 4-5 minutes then set aside',
       'Tost english muffins',
       'Cook canadian bacon/ham in skillet for about 6 minutes on medium-high heat',
       'Butter muffin, top with meat, poached egg, then sauce',
       'Season with chives, dill, salt and pepper'],

      ['14 tablespoons, unsalted butter',
       '3 large egg yolks',
       '1 1/2 teaspoons, lemon juice',
       '1/4 teaspoon, cayenne or hot paprika',
       '1 tablespoon, white distilled vinegar',
       '8 eggs',
       '4 split english muffins',
       '8 slices of canadian bacon or ham',
       '1/4 cup chives',
       '2 tablespoons, chopped dill/tarragon/parsley',
       'salt and ground pepper']
    );

    this.moroccanPastitsio = new Recipe(
      'Moroccan Pastitsio',
      'Moroccan spiced pastitsio with lamb and feta. Makes 10 servings. Takes 1 hour and 40 minutes total',
      this.IMG_PATH + 'moroccanPastitsio.jpg',

      ['In large skillet, heat oil on medium high heat',
       'Add onion and garlic and saute until soft, 5 minutes',
       'Add lamb and cook until brown, 8 minutes',
       'Stir in tomatoes with juice, mint, ras-el-hanout, tomato paste, 2 1/2 teaspoons cumin, and cinnamon',
       'Bring to boil then reduce heat to medium low and simmer for 15-18 minutes',
       'Season with salt and pepper',
       'Bring 2 cups milk to simmer in medium saucepan then cover and set aside',
       'Melt 6 tablespoons butter in large saucepan medium heat',
       'Whisk in flour',
       'Reduce heat to medium-low and cook til pale golden, whisk often, 3-4 minutes',
       'Whisk in warm milk',
       'Whisk 1 cup milk and 3 egg yolks in medium bowl then whisk into sauce',
       'Whisk in feta and 1/2 teaspoon cumin',
       'Bring sauce to boil, whisk often',
       'Reduce heat to medium-low and simmer while breaking up cheese, 5 minutes',
       'Season with salt and pepper',
       'Preheat oven to 400 F',
       'Butter deep 14 cup baking dish',
       'Cook pasta in large pot and return to pot once drained',
       'Mix in 2 tablespoons butter, egg whites, and 1/4 cup parmesan',
       'In dish spread 4 cups pasta, lamb mixture, remaining pasta, sauce, then 1/4 cup parmesan',
       'Place dish on baking sheet',
       'Bake for about 40 minutes then let stand for 5-10 minutes'
      ],

      ['2 tablespoons, olive oil',
       '1 1/4 cups, chopped red onion',
       '1 pound ground lamb',
       '1 28 ounce can dried tomatoes in juice',
       '2 tablespoons dried mint',
       '1 1/2 tablespoons, ras-el-hanout',
       '1 tablespoon, tomato paste',
       '3 teaspoons ground cumin',
       '1 teaspoon, ground cinnamon',
       '3 cups, whole milk',
       '8 tablespoons, unsalted butter',
       '6 tablespoons, flour',
       '3 large eggs, separated',
       '6 ounces, crumbled feta cheese',
       '1 pound, penne rigate',
       '1/2 cup, grated parmesan cheese']
    );

    this.tunaCasserole = new Recipe(
      'Easy Tuna Casserole',
      'Prep time: 15 minutes, Cook time: 30 minutes, and Total time: 45 minutes',
      this.IMG_PATH + 'tunaCasserole.jpg',

      ['Preheat oven to 350 F',
       'Combine macaroni, tuna, and soup in 9x13 baking dish',
       'Mix well then top with cheddar',
       'Bake until bubbly, 25 minutes',
       'Sprinkle on fried onions then bake for 5 more minutes'],

      ['3 cups, cooked macaroni',
       '1 5 ounce can, drained tuna',
       '1 10.75 ounce can, condensed cream of chicken soup',
       '1 cup, shredded cheddar cheese',
       '1 1/2 cups, french fried onions']
    );

    this.cheesecake = new Recipe(
      "Cheesecake",
      "Prep Time: 20 minutes, Cook Time: 80 minutes, and Total Time: 1 hour 40 minutes",
      this.IMG_PATH + "cheesecake.jpg",
      ["Instructions: ",
        "1) Preheat oven to 325F (160C).",
      "2) Prepare Graham Cracker crust first by combining graham cracker crumbs, sugar, and brown sugar, and stirring well. Add melted butter and use a fork to combine ingredients well.",
      "3) Pour crumbs into a 9” Springform pan and press firmly into the bottom and up the sides of your pan. Set aside.",
      "Cheesecake: ",
    "1. In the bowl of a stand mixer or in a large bowl (using a hand mixer) add cream cheese and stir until smooth and creamy (don’t over-beat or you’ll incorporate too much air).",
    "2. Add sugar and stir again until creamy.",
    "3. Add sour cream, vanilla extract, and salt, and stir until well-combined. If using a stand mixer, make sure you pause periodically to scrape the sides and bottom of the bowl with a spatula so that all ingredients are evenly incorporated.",
    "4. With mixer on low speed, gradually add lightly beaten eggs, one at a time, stirring just until each egg is just incorporated. Once all eggs have been added, use a spatula to scrape the sides and bottom of the bowl again and make sure all ingredients are well combined.",
    "5. Pour cheesecake batter into prepared springform pan. To insure against leaks, place pan on a cookie sheet that’s been lined with foil.",
    "6. Transfer to oven and bake on 325F (160C) for about 75 minutes. Edges will likely have slightly puffed and may have just begun to turn a light golden brown and the center should spring back to the touch but will still be Jello-jiggly. Don't over-bake or the texture will suffer, which means we all suffer.",
    "7. Remove from oven and allow to cool on top of the oven³ for 10 minutes. Once 10 minutes has passed, use a knife to gently loosen the crust from the inside of the springform pan (this will help prevent cracks as your cheesecake cools and shrinks).",
    "8. Allow cheesecake to cool another 1-2 hours or until near room temperature before transferring to refrigerator and allowing to cool overnight or at least 6 hours."],
      ["Graham Cracker Crust: ",
        "1 1/2 cups graham cracker crumbs (170g)",
       "2 Tablespoons sugar",
       "1 Tablespoon brown sugar ", 
       "7 Tablespoons butter melted", 
       "Cheesecake: ",
       "32 oz cream cheese² softened to room temperature (910g)", 
       "1 cup sugar 200g", 
       "2/3 cups sour cream 160g", 
       "1 1/2 teaspoons vanilla extract", 
       "1/8 teaspoon salt", 
       "4 large eggs room temperature, lightly beaten"]
    );

    this.quesillo = new Recipe(
      "Quesillo",
      "Prep Time: 5 minutes, Cook Time: 10 minutes, and Total Time: 15 minutes",
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
    );

  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

}
