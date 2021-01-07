import { NgModule } from '@angular/core';
import { CommonModule, Time } from '@angular/common';
import { Dificulty } from './dificulty.enum';

export interface RecipeModule { 
  title: string; //receive data fromt the outside
  description: string;
  image: string;
  ingredients: Array<[string, string, number]>; //Igredient name, metric and quantity
  timePrep: Time;
  timeCook: Time;
  dificulty: Dificulty;
  categories: Array<string>;
  steps: string;
  date: Date;
}
