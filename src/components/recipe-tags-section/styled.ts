import styled from 'styled-components';

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const RecipeTag = styled.div`
  border: 2px solid hotpink;
  margin: 5px;
  padding: 8px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;
