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
  @Input() recipeItem; //receive data fromt the outside
  @Output() recipeClicked = new EventEmitter(); //pass data to the outside

  constructor(private recipesListService: AllRecipesService) {
  }

  ngOnInit(): void {
    console.log('Aici');
  }

  onClicked() {
    this.recipesListService.deleteRecipe(this.recipeItem);
  }

}
