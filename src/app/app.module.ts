import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { AddRecipeComponent } from './recipe/add-recipe/add-recipe.component';
import { AllRecipesComponent } from './recipe/all-recipes/all-recipes.component';
import { AllRecipesService } from './recipe/all-recipes/all-recipes.service';
import { RecipeComponent } from './recipe/recipe.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    SidenavListComponent,
    AddRecipeComponent,
    AllRecipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [AllRecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
