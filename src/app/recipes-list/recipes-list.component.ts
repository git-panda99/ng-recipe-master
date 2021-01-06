import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { RecipesListService } from './recipes-list.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes = []
  private recipesSubscription: Subscription;

  constructor(private recipesListService: RecipesListService) {
  }

  ngOnInit(): void {
    this.recipes = this.recipesListService.getRecipes();
    this.recipesSubscription = this.recipesListService.recipesUpdated.subscribe(() =>{
      this.recipes = this.recipesListService.getRecipes();
    });
  }

  ngOnDestroy(): void {
    this.recipesSubscription.unsubscribe();
  }

  onAddRecipe(form) {
    if(form.valid)
      this.recipesListService.addRecipe(form.value.recipeTitle);
  }

  onRemoveRecipe(recipeTitle: string) {
    this.recipes = this.recipes.filter(p => p != recipeTitle);
  }

}
