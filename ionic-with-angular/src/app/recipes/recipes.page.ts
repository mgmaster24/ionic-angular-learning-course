import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  public recipes$: Observable<Recipe>;
  constructor(private readonly recipesService: RecipesService,
    private readonly router: Router) { }

  ngOnInit() {
    this.recipesService.Recipes$.subscribe(r => of(r))
  }

  onRecipeSelected(recipe: Recipe) {
    this.router.navigate(['/recipes', recipe.id]);
  }

}
