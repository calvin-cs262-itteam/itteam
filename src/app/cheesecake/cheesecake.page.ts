import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Recipe } from '../interfaces/recipe';
import{ Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { ActionSheetController, ToastController, Platform, LoadingController} from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { HttpClient } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';
import { finalize } from 'rxjs/operators';

const STORAGE_KEY ="my_images";
@Component({
  selector: 'app-cheesecake',
  templateUrl: './cheesecake.page.html',
  styleUrls: ['./cheesecake.page.scss'],
})
export class CheesecakePage implements OnInit {

  /*images = [];*/

  IMG_PATH = "../../assets/images/"
  cheesecake : Recipe;

  showSuggestions() {
    // this placeholder
    // I think an ion-popover is what is needed
  }


  constructor(private menu: MenuController /*,private camera: Camera, private file: File, private http: HttpClient, private webview: WebView,
    private actionSheetController: ActionSheetController, private toastController: ToastController,
    private storage: Storage, private plt: Platform, private loadingController: LoadingController,
    private ref: ChangeDetectorRef, private filePath: FilePath*/) { 

    this.cheesecake = new Recipe(
      "Cheesecake",
      "A sweet dessert consisting of one or more layers.",
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
    )

  }

  openFirst() {
    this.menu.enable(true, 'menu1');
    this.menu.open('menu1');
  }

  ngOnInit() {
    
  }

}
