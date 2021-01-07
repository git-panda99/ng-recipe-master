import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AllRecipesService } from './all-recipes/all-recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  @Input() recipeTitle: string; //receive data fromt the outside
  @Output() recipeClicked = new EventEmitter(); //pass data to the outside

  constructor(private recipesListService: AllRecipesService) { }

  ngOnInit(): void {
  }

  onClicked() {
    this.recipesListService.deleteRecipe(this.recipeTitle);
  }

}
