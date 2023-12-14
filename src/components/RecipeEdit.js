import React from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'

export default function RecipeEdit() {
  return (
    <div className="recipe-edit">
        <div className='recipe_edit_remove_btn_cintainer'>
          <button className='btn edit_remove_btn'>&times;</button>
        </div>
        <div className='recipe_edit_details_grid'>
            <label className='recipe_edit_label' htmlFor='name'>Name</label>
            <input className='recipe_edit_input' type='text' name='name' id='name'/>

            <label className='recipe_edit_label' htmlFor='cookTime'>Cook Time</label>
            <input className='recipe_edit_input' type='text' name='cookTime' id='cookTime'/>

            <label className='recipe_edit_label' htmlFor='servings'>Servings</label>
            <input className='recipe_edit_input' type='number' min={1} name='servings' id='servings'/>

            <label className='recipe_edit_label' htmlFor='instructions'>Instructions</label>
            <textarea className='recipe_edit_input' name='instructions' id='instructions'></textarea>
        </div>
          <br/>
          <label className='recipe_edit_label' >Ingredients</label>
          <div className='recipe_edit_ingredient-grid'>
            <div>Name</div>
            <div>Amount</div>
            <div></div>
            <RecipeIngredientEdit/>
            <RecipeIngredientEdit/>
          </div>
          <div className='recipe_edit_add_ingredient_container'>
            <button className='btn btn-primary'>Add Ingredient</button>
          </div>
    </div>
  )
}
