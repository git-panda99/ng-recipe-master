import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllRecipesService {
  private recipes = ['Pawi', 'Mowi'];
  recipesUpdated = new Subject();
  constructor() { }

  addRecipe(recipeTitle: string) {
    this.recipes.push(recipeTitle);
    this.recipesUpdated.next();
  }

  deleteRecipe(recipeTitle: string) {
    this.recipes = this.recipes.filter(p => p !== recipeTitle);
    this.recipesUpdated.next();
  }

  getRecipes() {
    return [...this.recipes]; //this creates a new array (a coppy)
  }
}
