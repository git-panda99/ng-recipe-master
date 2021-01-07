import { Injectable } from '@angular/core';
import { RecipeModule } from './recipe.module';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  createdRecipes: RecipeModule[] = [
  ];
  constructor() { }
}
