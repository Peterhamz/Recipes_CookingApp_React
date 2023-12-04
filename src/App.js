import React from "react";
import RecipeList from "./RecipeList";

export default function App() {
  return (
    <>
      <RecipeList recipies = {RecipeArray}/>
    </>
  )
}
const RecipeArray = 
[
    {
        id:1,
        name:"Plain Chicken",
        cookTime:"1:45",
        servings:3,
        instructions:"1. Put salt on chicken. n\ 2. Put chicken in Oven. n\ 3. Eat chicken"
    }, 
    {
      id:2,
      name:"Coke Fanta",
      cookTime:"1:45",
      servings:3,
      instructions:"1. Put salt on chicken. n\ 2. Put chicken in Oven. n\ 3. Eat chicken"
  }
]