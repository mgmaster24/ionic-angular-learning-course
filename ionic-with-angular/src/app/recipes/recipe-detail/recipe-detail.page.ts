import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

  private recipe$: Observable<Recipe>;
  private readonly paramId = 'recipeId';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly alertController: AlertController,
    private readonly recipeService: RecipesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((pm) => {
      if (!pm.has(this.paramId)) {
        this.router.navigate(['/recipes']);
        return;
      }

      const id = pm.get(this.paramId);
      this.recipe$ = this.recipeService.Recipes$.pipe(
        map((recipes) => recipes.find((r) => r.id === id))
      );
      this.recipe$.subscribe((r) => {
        this.recipe = r;
        this.title = r.title + ' Details';
      });
    });
  }

  onDeleteRecipe() {
    this.alertController
      .create({
        header: 'Are you sure',
        message: `Do you want to delete the ${this.recipe.title} recipe?`,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
          },
          {
            text: 'Delete',
            handler: () => {
              this.recipeService.delete(this.recipe.id);
              this.router.navigate(['/recipes']);
            },
          },
        ],
      })
      .then((ae) => ae.present());
  }
}
