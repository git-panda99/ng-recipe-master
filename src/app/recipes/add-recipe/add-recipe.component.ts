import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CategoryModule } from '../includes/category.module';

import { map } from "rxjs/operators";

export interface CategoryIdModule extends CategoryModule {id: string};

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  categories: Observable<CategoryIdModule[]>;

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
     this.categories = this.db
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
}
