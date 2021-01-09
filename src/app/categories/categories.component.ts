import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: any;
  categoryName: string;

  constructor(private catService: CategoryService) { }

  ngOnInit(): void {
    this.catService.read_Categories().subscribe(data => {

      this.categories = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          name: e.payload.doc.data()['name'],
        };
      })
      console.log(this.categories);

    });
  }

  CreateRecord() {
    let record = {};
    record['name'] = this.categoryName;
    this.catService.create_NewCategory(record).then(resp => {
      this.categoryName = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

  RemoveRecord(rowID) {
    this.catService.delete_Category(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.name = record.name;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['name'] = recordRow.name;
    this.catService.update_Category(recordRow.id, record);
    recordRow.isEdit = false;
  }
}
