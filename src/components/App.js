import React from "react";
import RecipeList from "./RecipeList";
import '../css/app.css'

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
        instructions:"1. Put salt on chicken. n\ 2. Put chicken in Oven. n\ 3. Eat chicken",
        ingredients:[
          {
             id:1,
             name:'chicken',
             amount:'2 pounds'
          },
          {
            id:2,
            name:'salt',
            amount:'1 pound'
         }
        ]
    }, 
    {
      id:2,
      name:"Coke Fanta",
      cookTime:"1:45",
      servings:3,
      instructions:"1. Put salt on chicken. n\ 2. Put chicken in Oven. n\ 3. Eat chicken",
      ingredients:[
        {
           id:1,
           name:'chicken',
           amount:'2 pounds'
        },
        {
          id:2,
          name:'salt',
          amount:'1 pound'
       }
      ]
  }
]