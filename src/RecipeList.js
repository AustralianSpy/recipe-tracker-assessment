import React from "react";
import Recipe from './Recipe';

function RecipeList({ recipes, deleteRecipe }) {
  
  // Displays the list of recipes using the structure of table.
  // Ternary operator to prevent error when trying to render an empty array of recipes.

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preperation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            recipes ?
              recipes.map((recipe, index) => (
                <Recipe
                  recipe={recipe}
                  deleteRecipe={() => deleteRecipe(index)}
                  key={index}
                />
              )) : null
          }
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
