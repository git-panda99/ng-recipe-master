import { Time } from '@angular/common';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as firebase from 'firebase';
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
  imageURL:any;

  constructor(private recipesListService: AllRecipesService) {
  }

  ngOnInit(): void {
    this.getImage(this.recipeItem.image);
    console.log('Aici');
  }

  onClicked() {
    this.recipesListService.deleteRecipe(this.recipeItem);
  }

  getImage(userId: string) {
    const userStorageRef = firebase.default.storage().ref().child(this.recipeItem.image);
    userStorageRef.getDownloadURL().then(url => {
      this.imageURL = url
    });
  }

}
