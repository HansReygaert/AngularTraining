import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipes[] = [new Recipes(
    'A Test Recipe',
    'This is simply a test',
    'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  )];
  constructor() { }

  ngOnInit(): void {
  }

}
