import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SignInComponent } from './auth/components/sign-in/sign-in.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { AllRecipesComponent, MyFilterPipe } from './recipes/all-recipes/all-recipes.component';
import { AllRecipesService } from './recipes/all-recipes/all-recipes.service';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AuthService } from './auth/shared/services/auth.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ManageRecipesComponent } from './recipes/manage-recipes/manage-recipes.component';
import { DashboardComponent } from './auth/components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './auth/components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth/components/verify-email/verify-email.component';



@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    HeaderComponent,
    SidenavListComponent,
    AllRecipesComponent,
    RecipesComponent,
    ManageRecipesComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    MyFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [AllRecipesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
