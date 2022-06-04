import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  public title = '';
  public backIcon = 'chevron-back-outline';
  public recipe: Recipe;

  private readonly paramId = 'recipeId';

  constructor(private readonly route: ActivatedRoute,
    private readonly recipeService: RecipesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(pm => {
      if (!pm.has(this.paramId)) {
        return;
      }

      const id = pm.get(this.paramId);
      this.recipe = this.recipeService.getRecipe(id);
      this.title = this.recipe.title + ' Details';
    });
  }

}
