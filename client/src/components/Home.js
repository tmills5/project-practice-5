import React from 'react';
import RecipeDetailCard from './RecipeDetailCard'


function Home({ randomRecipes }) {
console.log(randomRecipes)
    return(
        <>
            {randomRecipes.map(recipe=> (
                <RecipeDetailCard recipe={recipe} />
            ))}
        </>
    );
};

export default Home;