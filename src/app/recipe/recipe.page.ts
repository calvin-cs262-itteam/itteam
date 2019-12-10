import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../interfaces/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  private recipe: Recipe;

  constructor(private route: ActivatedRoute) {
    // this.recipe = {

    // }
  }

  ngOnInit() {
  }

}
