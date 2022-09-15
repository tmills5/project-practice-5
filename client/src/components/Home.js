import React from 'react';
import RecipeDetailCard from './RecipeDetailCard'


function Home({ randomRecipes }) {
// console.log(randomRecipes)
    return(
        <div>
            {randomRecipes.map(recipe=> (
                <RecipeDetailCard recipe={recipe} key={recipe.idMeal} />
            ))}
        </div>
    );
};

export default Home;