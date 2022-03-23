import React from 'react';

export default function Recipe ({ recipe, deleteRecipe }) {
    const { name, cuisine, photo, ingredients, preparation } = recipe;
    return (
        <tr>
            <td><p>{name}</p></td>
            <td><p>{cuisine}</p></td>
            <td><img src={photo} alt={`${name}`} /></td>
            <td><p>{ingredients}</p></td>
            <td><p>{preparation}</p></td>
            <td><button name="delete" onClick={deleteRecipe}>Delete</button></td>
        </tr>
    );
}