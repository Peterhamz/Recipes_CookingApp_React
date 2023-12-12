import React, {useState, useEffect} from "react";
import RecipeList from "./RecipeList";
import '../css/app.css'
// import uuidv4 from 'uuid/v4'

export const RecipeContext = React.createContext()

const LOCAL_STORAGE_KEY = 'cookingWithReact.recipe'

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}


export default function App() {

  const [recipe, setRecipe] = useState(RecipeArray)

  useEffect(() =>{
    //console.log("Using Use Effect")
  })

  useEffect(() =>{
    console.log("First Effect")
    const recipeJson =  localStorage.getItem(LOCAL_STORAGE_KEY)
    if(recipeJson != null) setRecipe(JSON.parse(recipeJson))
   },[])
   
   useEffect(() =>{
      console.log("second Effect")
     const theItem = localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipe))
     console.log(theItem)
   },[recipe])
  

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete
  }



  function handleRecipeAdd(){
      const newRecipe = {
        id:generateRandomString(10),
        name:"Plain Chicken",
        cookTime:"1:45",
        servings:3,
        instructions:"inst.",
        ingredients:[
          {
             id:generateRandomString(8),
             name:"Name",
             amount:'2 pounds'
          }
        ]
      }
      setRecipe([...recipe, newRecipe])
  }

  function handleRecipeDelete(id){
    setRecipe(recipe.filter(recip => recip.id !==id))
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
       <RecipeList  recipies = {recipe}/>
      </RecipeContext.Provider>
  )
}
const RecipeArray = 
[
    {
        id:generateRandomString(10),
        name:"Plain Chicken",
        cookTime:"1:45",
        servings:3,
        instructions:"1. Put salt on chicken. n\ 2. Put chicken in Oven. n\ 3. Eat chicken",
        ingredients:[
          {
             id:generateRandomString(8),
             name:'chicken',
             amount:'2 pounds'
          },
          {
            id:generateRandomString(8),
            name:'salt',
            amount:'1 pound'
         }
        ]
    }, 
]