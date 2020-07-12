export interface Recipe extends RecipeTags {
  id: string;
  name: string;
  source: string;
  pageNumber?: string;
  mainIngredients?: string[];
  caloriesPerServing?: number;
}

export interface RecipeTags {
  isFavourite: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isQuick: boolean;
  isHealthy: boolean;
  isForCompany: boolean;
  isLowCal: boolean;
}

export type RecipeFilterKeys = keyof RecipeTags;

// export interface AddRecipeFormCheckboxes {
//   isCheap: boolean;
//   isFavourite: boolean;
//   isVegan: boolean;
//   isVegetarian: boolean;
//   isQuick: boolean;
//   isHealthy: boolean;
//   isForCompany: boolean;
// }

export interface BoxErrors {
  isCheap?: string;
  isQuick?: string;
  isFavourite?: string;
  isVegan?: string;
  isVegetarian?: string;
  isHealthy?: string;
  isSlowCooker?: string;
  isAirFryer?: string;
  isInstantPot?: string;
  isForCompany?: string;
}

export type RequiredCheckboxKeys = keyof BoxErrors;
