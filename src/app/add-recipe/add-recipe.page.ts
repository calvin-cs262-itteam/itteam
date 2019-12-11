import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.page.html',
  styleUrls: ['./add-recipe.page.scss'],
})
export class AddRecipePage {

  public ingrForm: FormGroup;
  public stepForm: FormGroup;
  // tslint:disable-next-line: no-inferrable-types
  private ingrCount: number = 1;
  private stepCount: number = 1;

  constructor(private formBuilder: FormBuilder) {
    
    this.ingrForm = formBuilder.group({
      ingredient1: ['', Validators.required]
    });
    this.stepForm = formBuilder.group({
      instruction1: ['', Validators.required]
    });
  }

  // controls for ingredient list
  addIngredient() {
    this.ingrCount++;
    this.ingrForm.addControl('player' + this.ingrCount, new FormControl('', Validators.required));
  }
  removeIngredient(control) {
    this.ingrForm.removeControl(control.key);
  }

  // controls for step list
  addStep() {
    this.stepCount++;
    this.stepForm.addControl('player' + this.stepCount, new FormControl('', Validators.required));
  }
  removeStep(control) {
    this.stepForm.removeControl(control.key);
  }
}

