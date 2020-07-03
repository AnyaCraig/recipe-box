import React from 'react';
import { favouriteIconColours } from '../../constants';
import { IconWrapper } from './styled';
interface FavouriteIconProps {
  isFavourite: boolean;
}

export const FavouriteIcon: React.FC<FavouriteIconProps> = ({ isFavourite }) => {
  const leftColour = isFavourite
    ? favouriteIconColours.isFavourite.left
    : favouriteIconColours.isNotFavourite.left;

  const rightColour = isFavourite
    ? favouriteIconColours.isFavourite.right
    : favouriteIconColours.isNotFavourite.right;

  return (
    <IconWrapper>
      <svg width="40px" height="40px" viewBox="0 0 512 512">
        <path
          fill={leftColour}
          d="M467.204,67.921C412.786,20.394,329.86,25.984,282.31,80.365l-26.311,29.66l-26.311-29.66
	C182.138,25.984,99.212,20.396,44.795,67.921c-54.437,47.543-60.045,130.51-12.503,184.946l185.641,206.535
	c9.692,10.783,23.568,16.968,38.067,16.968c14.499,0,28.375-6.185,38.067-16.968L479.546,253.05l0.161-0.182
	C527.251,198.431,521.641,115.464,467.204,67.921z"
        />
        <path
          fill={rightColour}
          d="M467.204,67.921C412.786,20.394,329.86,25.984,282.31,80.365l-26.311,29.66v366.346
	c14.5,0,28.375-6.185,38.067-16.968L479.545,253.05l0.161-0.182C527.251,198.431,521.641,115.464,467.204,67.921z"
        />
      </svg>
    </IconWrapper>
  );
};
