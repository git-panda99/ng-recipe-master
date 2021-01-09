import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CategoryModule } from '../includes/category.module';
import { RecipeModule } from '../includes/recipe.module';
import { RecipeService } from '../includes/recipe.service';
import { AllRecipesService } from './all-recipes.service';
export interface CategoryIdModule extends CategoryModule {id: string};

@Pipe({
  name: 'myfilter',
  pure: false
})
export class MyFilterPipe implements PipeTransform {
  transform(items: RecipeModule[], filter: String): any {
    console.log("Filter: "+filter);
      if (!items || !filter) {
          return items;
      }
      // filter items array, items which match and return true will be
      // kept, false will be filtered out
      // return items.filter(item => item.categories.indexOf(filter) !== -1);
      return items.filter(item => {
        var itemFound = false;
        let ok= 0;
        for (let i = 0; i < item.categories.length; i++) {
          if (filter.indexOf(item.categories[i]) !== -1) {
            //itemFound = true;
            ok++;
          }
        }
        if(ok==filter.length)
          return true;

        return itemFound;
      });
        /*const notMatchingField = Object.keys(filter)
                                     .find(key => item[key].categories.indexOf(filter) !== -1);

        return !notMatchingField; // true if matches all fields
    });*/
  }
}

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {

  recipes: any;
  recipeCategories: string;
  private recipesSubscription: Subscription;
  categories: Observable<CategoryIdModule[]>;
  constructor(private recipeService: RecipeService) {
  }
  

  ngOnInit(): void {
    this.categories = this.recipeService.read_Categories();
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
