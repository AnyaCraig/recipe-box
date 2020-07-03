import React from 'react';
import { RecipeHeaderContainer, RecipeName } from './styled';
import { FavouriteIcon } from '../icons/favourite-icon';

interface RecipeCardHeaderProps {
  recipeName: string;
  isFavourite: boolean;
}

export const RecipeCardHeader: React.FC<RecipeCardHeaderProps> = ({ recipeName, isFavourite }) => {
  return (
    <RecipeHeaderContainer>
      <RecipeName>{recipeName}</RecipeName>
      <FavouriteIcon isFavourite={isFavourite} />
    </RecipeHeaderContainer>
  );
};
