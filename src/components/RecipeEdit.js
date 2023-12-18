import React, {useContext} from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import { RecipeContext } from './App'

export default function RecipeEdit({recipee}) {
const {handleNewRecipeArray, handleRecipeSelect, generateRandomString} = useContext(RecipeContext)

function handleChange(changes){
  handleNewRecipeArray(recipee.id, {...recipee, ...changes})
}

function handleIngredientChange(id, ingred){
  const newIngredient = [...recipee.ingredients]
  const index = newIngredient.findIndex(r => r.id === id)
  newIngredient[index] = ingred
  handleChange({ingredients: newIngredient})
}

function handleIngredientAdd(){
  const newIngredient = {
    id: generateRandomString(9),
    name:"",
    amount:""
  }
  handleChange({ingredients: [...recipee.ingredients, newIngredient]})
}
 
function handleIngredientDelete(id){
  handleChange({
    ingredients: recipee.ingredients.filter(i => i.id !== id)
  })
}

  return (
    <div className="recipe-edit">
        <div className='recipe_edit_remove_btn_cintainer'>
          <button className='btn edit_remove_btn' onClick={() => handleRecipeSelect(undefined)}>&times;</button>
        </div>
        <div className='recipe_edit_details_grid'>
            <label className='recipe_edit_label' htmlFor='name'>Name</label>
            <input className='recipe_edit_input' value={recipee.name} onInput={e => handleChange({name: e.target.value})} type='text' name='name' id='name'/>

            <label className='recipe_edit_label' htmlFor='cookTime'>Cook Time</label>
            <input className='recipe_edit_input' value={recipee.cookTime}  onInput={e => handleChange({cookTime: e.target.value})} type='text' name='cookTime' id='cookTime'/>

            <label className='recipe_edit_label' htmlFor='servings'>Servings</label>
            <input className='recipe_edit_input' value={recipee.servings}  onInput={e => handleChange({servings: parseInt(e.target.value) || ''})} type='number' min={1} name='servings' id='servings'/>

            <label className='recipe_edit_label' htmlFor='instructions'>Instructions</label>
            <textarea className='recipe_edit_input' value={recipee.instructions}  onInput={e => handleChange({instructions: e.target.value})} name='instructions' id='instructions'></textarea>
        </div>
          <br/>
          <label className='recipe_edit_label' >Ingredients</label>
          <div className='recipe_edit_ingredient-grid'>
            <div>Name</div>
            <div>Amount</div>
            <div></div>
            {recipee.ingredients.map(ingredient => (
                <RecipeIngredientEdit 
                key={ingredient.id} 
                handleIngredientChange = {handleIngredientChange}
                handleIngredientDelete = {handleIngredientDelete}
                ingredient={ingredient}/>
            ))}
          </div>
          <div className='recipe_edit_add_ingredient_container'>
            <button className='btn btn-primary' onClick={() => handleIngredientAdd()}>Add Ingredient</button>
          </div>
    </div>
  )
}
