import React, { useState } from 'react';
import { RecipeCard } from '../recipe-card';
import { Recipe } from '../types';
import { RecipeUnorderedList } from './styled';

interface RecipeCardListProps {
  recipes: Recipe[];
}

const RecipeCardList: React.FC<RecipeCardListProps> = ({ recipes }) => {
  const [allRecipes] = useState(recipes);
  const [recipesToShow, setRecipesToShow] = useState(recipes);

  const filterRecipesToShow = (recipesToShow: Recipe[]) => {
    setRecipesToShow(recipesToShow);
  };

  // TO DO: Get this working  - currently getting an error
  // const handleFilterButtonClick = (filterTerm: any) => {
  //   const filteredRecipes = allRecipes.filter((recipe) => recipe[filterTerm]);
  //   filterRecipesToShow(filteredRecipes);
  // };

  const handleHealthyButtonClick = () => {
    const healthyRecipes = allRecipes.filter((recipe) => recipe.isHealthy);
    filterRecipesToShow(healthyRecipes);
  };

  const handleLowCalButtonClick = () => {
    const lowCalRecipes = allRecipes.filter(
      (recipe) => (recipe.caloriesPerServing && recipe.caloriesPerServing < 450) || false,
    );
    filterRecipesToShow(lowCalRecipes);
  };

  const handleForCompanyButtonClick = () => {
    const forCompanyRecipes = allRecipes.filter((recipe) => recipe.isForCompany);
    filterRecipesToShow(forCompanyRecipes);
  };

  const handleVeganButtonClick = () => {
    const veganRecipes = allRecipes.filter((recipe) => recipe.isVegan);
    filterRecipesToShow(veganRecipes);
  };

  const handleVegetarianButtonClick = () => {
    const vegetarianRecipes = allRecipes.filter((recipe) => recipe.isVegetarian);
    filterRecipesToShow(vegetarianRecipes);
  };

  const handleQuickButtonClick = () => {
    const quickRecipes = allRecipes.filter((recipe) => recipe.isQuick);
    filterRecipesToShow(quickRecipes);
  };

  const recipeList = recipesToShow.map((recipe) => (
    <RecipeCard recipeData={recipe} key={recipe.id} />
  ));

  return (
    <div className="wrapper">
      <h2>Here are your recipes</h2>
      {/* <button onClick={() => handleFilterButtonClick('isHealthy')}>
        Show only healthy recipes
      </button> */}
      <button onClick={handleHealthyButtonClick}>Show only healthy recipes</button>
      <button onClick={handleLowCalButtonClick}>Show only low-cal recipes</button>
      <button onClick={handleForCompanyButtonClick}>Show only recipes fit for company</button>
      <button onClick={handleVeganButtonClick}>Show only vegan recipes</button>
      <button onClick={handleVegetarianButtonClick}>Show only vegetarian recipes</button>
      <button onClick={handleQuickButtonClick}>Show only quick recipes</button>
      {!!recipeList.length && <RecipeUnorderedList>{recipeList}</RecipeUnorderedList>}
      {!recipeList.length && <p>Sorry, there aren't any recipes to show!</p>}
    </div>
  );
};

export default RecipeCardList;
