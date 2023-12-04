import React from 'react'
import Recipe from './Recipe'

export default function RecipeList({recipies}) {
  return (
    <>    
       {recipies.map(recipe => {
       return <Recipe {...recipe}/>
       })}
    </>

  )
}


