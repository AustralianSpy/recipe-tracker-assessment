import React from 'react';

export default function Recipe ({ recipe, deleteRecipe }) {
    // Displays each individual recipe, handles deletion of recipe from state.
    
    const { name, cuisine, photo, ingredients, preparation } = recipe;
    return (
        <tr>
            <td><p>{name}</p></td>
            <td><p>{cuisine}</p></td>
            <td><img src={photo} alt={`${name}`} /></td>
            <td className='content_td'><p>{ingredients}</p></td>
            <td className='content_td'><p>{preparation}</p></td>
            <td><button name="delete" onClick={deleteRecipe}>Delete</button></td>
        </tr>
    );
}