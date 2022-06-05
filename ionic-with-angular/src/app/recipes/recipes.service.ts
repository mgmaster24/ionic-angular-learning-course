import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
      ingredients: ['French Fries', 'Pork Meat', 'Salad'],
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      // eslint-disable-next-line max-len
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/1024px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes'],
    },
  ];

  private recipes$: BehaviorSubject<Recipe[]>;

  constructor() {
    this.recipes$ = new BehaviorSubject<Recipe[]>([...this.recipes]);
  }

  get Recipes$(): Observable<Recipe[]> {
    return this.recipes$;
  }

  // getRecipe$(recipeId: string): Recipe {
  //   return this.recipesSubject.pipe(find());
  // }

  getRecipe(recipeId: string): Recipe {
    return {
      ...this.recipes.find((recipe) => recipe.id === recipeId),
    };
  }

  delete(recipeId: string): void {
    this.recipes = this.recipes.filter((r) => r.id !== recipeId);
    this.recipes$.next([...this.recipes]);
  }
}
