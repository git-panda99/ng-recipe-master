import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Dificulty } from '../includes/dificulty.enum';
import { RecipeService } from '../includes/recipe.service';

import * as uuid from 'uuid';
import { CategoryModule } from '../includes/category.module';
import { Router } from '@angular/router';
export interface CategoryIdModule extends CategoryModule {id: string};

@Component({
  selector: 'app-manage-recipes',
  templateUrl: './manage-recipes.component.html',
  styleUrls: ['./manage-recipes.component.css']
})
export class ManageRecipesComponent implements OnInit {
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  recipeTitlePlaceholder: string;
  invalidImage = false;

  categories: Observable<CategoryIdModule[]>;

  title = 'Firestore CRUD Operations Recipe App';

  recipe: any;
  recipeTitle: string;
  recipeDescription: string;
  recipeImage: any;
  recipeIngredients: Array<[string, number]>;
  recipeTimePrep: {};
    recipeTimePrepHours = 0;
    recipeTimePrepMinutes = 0;
  recipeTimeCook: {};
    recipeTimeCookHours = 0;
    recipeTimeCookMinutes = 0;
  recipeDificulty: Dificulty;
  recipeCategories: Array<string>;
  recipeSteps: string;

  constructor(private recipeService: RecipeService, private storage: AngularFireStorage, private router: Router) { }

  ngOnInit(): void {
    this.categories = this.recipeService.read_Categories();

    this.recipeService.read_Recipe().subscribe(data => {

      this.recipe = data.map(e => {
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
      console.log(this.recipe);

    });
  }

  CreateRecord() {
    let record = {};

    record['title'] = this.recipeTitle;
    record['description'] = this.recipeDescription;
    record['image'] = this.recipeImage;
    record['ingredients'] = {};
    record['timePrep'] = {hours: this.recipeTimePrepHours, minutes: this.recipeTimePrepMinutes};
    record['timeCook'] = {hours: this.recipeTimePrepHours, minutes: this.recipeTimePrepMinutes};
    record['dificulty'] = this.recipeDificulty;
    record['categories'] = this.recipeCategories;
    record['steps'] = this.recipeSteps;

    this.recipeService.create_NewRecipe(record).then(resp => {
      this.recipeTitle = "";
      this.recipeDescription = "";
      this.recipeImage = "";
      this.recipeIngredients = new Array;
      this.recipeTimePrep = new Map([["hours", 0],["minutes", 0]]);
      this.recipeTimeCook = new Map([["hours", 0],["minutes", 0]]);
      this.recipeDificulty = 0;
      this.recipeCategories = [];
      this.recipeSteps = "";    

      console.log(resp);

      this.router.navigate(['']);
    })
      .catch(error => {
        console.log(error);
      });
  }

  RemoveRecord(rowID) {
    this.recipeService.delete_Recipe(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    
    record.EditTitle = record.recipeTitle;
    record.EditDescription = record.recipeDescription;
    record.EditImage = record.recipeImage;
    record.EditIngredients = record.recipeIngredients;
    record.EditTimePrep = record.recipeTimePrep;
    record.EditTimeCook = record.recipeTimeCook;
    record.EditDificulty = record.recipeDificulty;
    record.EditCategories = record.recipeCategories;
    record.EditSteps = record.recipeSteps;
    record.EditDate = record.recipeDate;
  }

  UpdateRecord(recordRow) {
    let record = {};
  
    record['title'] = recordRow.EditTitle;
    record['description'] = recordRow.EditDescription;
    record['image'] = recordRow.EditImage;
    record['ingredients'] = recordRow.EditIngredients;
    record['timePrep'] = recordRow.EditTimePrep;
    record['timeCook'] = recordRow.EditTimeCook;
    record['dificulty'] = recordRow.EditDificulty;
    record['categories'] = recordRow.EditCategories;
    record['steps'] = recordRow.EditSteps;
    record['date'] = recordRow.EditDate;

    this.recipeService.update_Recipe(recordRow.id, record);
    recordRow.isEdit = false;
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = '' + 'recipeimages' + '/' + uuid.v4() + file.name;
    this.recipeImage = filePath;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    this.invalidImage = true;
    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          })
     )
    .subscribe();
  }

}
