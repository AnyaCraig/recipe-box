import React from 'react';
import './App.css';
import RecipeCardList from './components/recipe-card-list/index';
import Async from 'react-async';
import { AddRecipeForm } from './components/add-recipe-form/add-recipe-form';

function App() {
  const loadRecipes = () =>
    fetch('./seeds.json')
      .then((res) => (res.ok ? res : Promise.reject(res)))
      .then((res) => res.json());

  return (
    <div className="App">
      <Async promiseFn={loadRecipes}>
        {({ data, err, isLoading }) => {
          if (isLoading) return 'Loading...';
          if (err) return `Something went wrong: ${err.message}`;
          return (
            <div className="recipe-data">
              {/* <RecipeCardList recipes={data} /> */}
              <AddRecipeForm />
            </div>
          );
        }}
      </Async>
    </div>
  );
}

export default App;
