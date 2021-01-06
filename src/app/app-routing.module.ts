import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { RecipesListComponent } from "./recipes-list/recipes-list.component";

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'recipes', component: RecipesListComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}