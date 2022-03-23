import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  // Form creates a new recipe on-submission, then clears form content.
  // Includes submit and form-change handlers, initial form state.

  const initialRecipe = {
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: '',
  };

  const [recipe, setRecipe] = useState({ ...initialRecipe });
  const handleChange = ({ target }) => {
    setRecipe({
      ...recipe,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createRecipe(recipe);

    setRecipe({ ...initialRecipe });
  };

  // Destructured recipe keys for ease of reading.
  const { name, cuisine, photo, ingredients, preparation } = recipe;
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input type="text" name="name" id="name" onChange={handleChange} value={name} placeholder="Name" />
            </td>
            <td>
              <input type="text" name="cuisine" id="cuisine" onChange={handleChange} value={cuisine} placeholder="Cuisine" />
            </td>
            <td>
              <input type="url" name="photo" id="photo" onChange={handleChange} value={photo} placeholder="URL" />
            </td>
            <td>
              <textarea name="ingredients" id="ingredients" cols="30" rows="2" onChange={handleChange} value={ingredients} placeholder="Ingredients"></textarea>
            </td>
            <td>
              <textarea name="preparation" id="preparation" cols="30" rows="2" onChange={handleChange} value={preparation} placeholder="Preparation"></textarea>
            </td>            
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
