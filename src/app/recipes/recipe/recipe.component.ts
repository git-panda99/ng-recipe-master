import { Time } from '@angular/common';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AllRecipesService } from '../all-recipes/all-recipes.service';
import { Dificulty } from '../includes/dificulty.enum';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})


export class RecipeComponent implements OnInit {
  @Input() recipeTitle: string; //receive data fromt the outside
  recipeDescription: string;
  recipeImage: string;
  recipeIngredients: Array<[string, string, number]>; //Igredient name, metric and quantity
  recipeTimePrep: Time;
  recipeTimeCook: Time;
  recipeDificulty: Dificulty;
  recipeCategories: Array<string>;
  recipeSteps: Array<string>;

  @Output() recipeClicked = new EventEmitter(); //pass data to the outside

  constructor(private recipesListService: AllRecipesService) { }

  ngOnInit(): void {
  }

  onClicked() {
    this.recipesListService.deleteRecipe(this.recipeTitle);
  }

}
