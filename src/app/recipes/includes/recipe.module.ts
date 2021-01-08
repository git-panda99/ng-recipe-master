import { NgModule } from '@angular/core';
import { CommonModule, Time } from '@angular/common';
import { Dificulty } from './dificulty.enum';

export interface RecipeModule { 
  id: string;
  isEdit: boolean;
  title: string;
  description: string;
  image: string;
  ingredients: any;
  timePrep: any;
  timeCook: any;
  dificulty: any;
  categories: any;
  steps: string;
  
}
