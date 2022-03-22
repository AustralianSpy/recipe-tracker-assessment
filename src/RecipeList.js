import React from "react";
import Recipe from './Recipe';

function RecipeList({ recipes, deleteRecipe }) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            recipes ?
              recipes.map((recipe, index) => (
                <tr>
                  <td>
                    <Recipe
                      recipe={recipe}
                      deleteRecipe={() => deleteRecipe(index)}
                      key={index}
                    />
                  </td>
                </tr>
              )) : null
          }
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
