import React from "react";
import { Recipe } from "../types";
import { RecipeWrapper } from "./styled";
import RecipeTagsSection from "../recipe-tags-section";

interface RecipeCardProps {
  recipeData: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipeData }) => {
  const getRecipeTags = (recipeInfo: Recipe) => {
    return {
      isVegan: recipeInfo.isVegan,
      isVegetarian: recipeInfo.isVegetarian,
      isHealthy: recipeInfo.isHealthy,
      isQuick: recipeInfo.isQuick,
      isForCompany: recipeInfo.isForCompany,
      isLowCal:
        (recipeInfo.caloriesPerServing &&
          recipeInfo.caloriesPerServing < 450) ||
        false,
    };
  };

  return (
    <RecipeWrapper>
      <p>{recipeData.name}</p>
      <RecipeTagsSection tags={getRecipeTags(recipeData)} />
      <p>
        Number of calories: <b>{recipeData.caloriesPerServing}</b>
      </p>
      <p>
        Source: <b>{recipeData.source}</b>
        {recipeData.pageNumber && ` (page ${recipeData.pageNumber})`}
      </p>
    </RecipeWrapper>
  );
};

export default RecipeCard;
