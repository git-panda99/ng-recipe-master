import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { CategoryModule } from './category.module';
import { map } from 'rxjs/operators';

import * as firebase from 'firebase';
import { RecipeModule } from './recipe.module';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  folder: any;

  constructor(private firestore: AngularFirestore, private afStorage: AngularFireStorage) {
    this.folder = "recipeimages";
  }

  create_NewRecipe(record) {
    return this.firestore.collection('recipes').add(record);
  }

  read_Recipe() {
    return this.firestore.collection<RecipeModule>('recipes').snapshotChanges()
    .pipe(
      map((docArray) => {
        return docArray.map((doc) => {
          return {
            id: doc.payload.doc.id,
            ...(doc.payload.doc.data() as RecipeModule),
          };
        });
      }));
  }

  read_Categories(){
    return this.firestore
    .collection<CategoryModule>("categories")
    .snapshotChanges()
    .pipe(
      map((docArray) => {
        return docArray.map((doc) => {
          return {
            id: doc.payload.doc.id,
            ...(doc.payload.doc.data() as CategoryModule),
          };
        });
      }));
  }

  update_Recipe(recordID,record){
    this.firestore.doc('recipes/' + recordID).update(record);
  }

  delete_Recipe(record_id) {
    this.firestore.doc('recipes/' + record_id).delete();
  }
}
