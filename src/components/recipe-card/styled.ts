import styled from 'styled-components';

export const RecipeWrapper = styled.li`
  border: 3px solid orange;
  width: 30%;
  min-width: 300px
  max-width: 450px;
  margin: 0;
  padding: 15px;
`;

export const RecipeHeaderContainer = styled.div`
  border: 1px solid red;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const RecipeName = styled.p`
  border: 1px solid blue;
  max-width: calc(100% - 60px);
  display: flex;
  margin: 0;
`;
