export interface Recipe {
  id: string;
  name: string;
  source: string;
  pageNumber?: string;
  mainIngredients?: string[];
  caloriesPerServing?: number;
  isCheap: boolean;
  isFavourite: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isQuick: boolean;
  isHealthy: boolean;
  isSlowcooker: boolean;
  isInstantPot: boolean;
  isAirFryer: boolean;
  isForCompany: boolean;
}

export interface RecipeTags {
  isVegan: boolean;
  isVegetarian: boolean;
  isHealthy: boolean;
  isQuick: boolean;
  isForCompany: boolean;
  isLowCal: boolean;
}
