import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.page.html',
  styleUrls: ['./add-recipe.page.scss'],
})
export class AddRecipePage {

  public myForm: FormGroup;
  // tslint:disable-next-line: no-inferrable-types
  private playerCount: number = 1;

  constructor(private formBuilder: FormBuilder) {

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
}

