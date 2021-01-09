import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private firestore: AngularFirestore) {
  }

  create_NewCategory(record) {
    return this.firestore.collection('categories').add(record);
  }


  read_Categories(){
    return this.firestore.collection('categories').snapshotChanges();
  }

  update_Category(recordID,record){
    this.firestore.doc('categories/' + recordID).update(record);
  }

  delete_Category(record_id) {
    this.firestore.doc('categories/' + record_id).delete();
  }
}
