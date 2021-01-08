import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeService } from '../includes/recipe.service';
import { AllRecipesService } from './all-recipes.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {

  recipes: any;
  private recipesSubscription: Subscription;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    let recipesObs = this.recipeService.read_Recipe();
    recipesObs.subscribe(data => {

      this.recipes = data.map(e => {
        return {
          id: e.id,
          isEdit: false,
          title: e.title,
          description: e.description,
          image: e.image,
          ingredients: e.ingredients,
          timePrep: e.timePrep,
          timeCook: e.timeCook,
          dificulty: e.dificulty,
          categories: e.categories,
          steps: e.steps
        };
      })
      console.log(this.recipes);

    });
    console.log("here");
    console.log(this.recipes );
    console.log("here");
    /*this.recipesSubscription = this.allRecipesService.recipesUpdated.subscribe(() =>{
      this.recipes = this.allRecipesService.getRecipes();
    });*/
  }

  /*ngOnDestroy(): void {
    this.recipesSubscription.unsubscribe();
  }

  onAddRecipe(form) {
    if(form.valid)
      this.allRecipesService.addRecipe(form.value.recipeTitle);
  }*/

  onRemoveRecipe(recipe: any) {
    //this.recipes = this.recipes.filter(p => p != recipeTitle);
  }

}
