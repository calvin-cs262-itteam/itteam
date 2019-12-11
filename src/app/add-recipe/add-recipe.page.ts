import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Camera, CameraOptions} from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.page.html',
  styleUrls: ['./add-recipe.page.scss'],
})
export class AddRecipePage {
  currentImage;

  public myForm: FormGroup;
  // tslint:disable-next-line: no-inferrable-types
  private playerCount: number = 1;

  constructor(private formBuilder: FormBuilder, private camera: Camera) {

    this.myForm = formBuilder.group({
      player1: ['', Validators.required]
    });
  }
  addControl() {
    this.playerCount++;
    this.myForm.addControl('player' + this.playerCount, new FormControl('', Validators.required));
  }

  removeControl(control) {
    this.myForm.removeControl(control.key);
  }

  async takePicture(){
    const option: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    try {
      const imageData = await this.camera.getPicture(option);
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
    } catch (err){
        console.log('error', err);
    }
  }
}

