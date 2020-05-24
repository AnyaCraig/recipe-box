import React from "react";
import { RecipeTags } from "../types";
import { TagsWrapper, RecipeTag } from "./styled";

interface RecipeTagsProps {
  tags: RecipeTags;
}

const RecipeTagsSection: React.FC<RecipeTagsProps> = ({ tags }) => {
  const {
    isVegan,
    isVegetarian,
    isQuick,
    isHealthy,
    isForCompany,
    isLowCal,
  } = tags;

  return (
    <TagsWrapper>
      {isHealthy && <RecipeTag>Healthy</RecipeTag>}
      {isQuick && <RecipeTag>Quick</RecipeTag>}
      {isLowCal && <RecipeTag>Low-cal</RecipeTag>}
      {isVegan && <RecipeTag>Vegan</RecipeTag>}
      {isVegetarian && <RecipeTag>Vegetarian</RecipeTag>}
      {isForCompany && <RecipeTag>For Company</RecipeTag>}
    </TagsWrapper>
  );
};

export default RecipeTagsSection;
