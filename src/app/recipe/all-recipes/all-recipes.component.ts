import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AllRecipesService } from './all-recipes.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {

  recipes = []
  private recipesSubscription: Subscription;

  constructor(private allRecipesService: AllRecipesService) {
  }

  ngOnInit(): void {
    this.recipes = this.allRecipesService.getRecipes();
    this.recipesSubscription = this.allRecipesService.recipesUpdated.subscribe(() =>{
      this.recipes = this.allRecipesService.getRecipes();
    });
  }

  ngOnDestroy(): void {
    this.recipesSubscription.unsubscribe();
  }

  onAddRecipe(form) {
    if(form.valid)
      this.allRecipesService.addRecipe(form.value.recipeTitle);
  }

  onRemoveRecipe(recipeTitle: string) {
    this.recipes = this.recipes.filter(p => p != recipeTitle);
  }

}
