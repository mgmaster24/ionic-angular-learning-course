import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  public recipes: Recipe[];
  constructor(private readonly recipesService: RecipesService,
    private readonly router: Router) { }

  ngOnInit() {
    this.recipes = this.recipesService.alllRecipes;
  }

  onRecipeSelected(recipe: Recipe) {
    this.router.navigate(['/recipes', recipe.id]);
  }

}
