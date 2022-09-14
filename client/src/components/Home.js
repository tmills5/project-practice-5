import React from 'react';
import RecipeDetailCard from './RecipeDetailCard'


function Home({ randomRecipes }) {
console.log(randomRecipes)
    return(
        <div>
            {randomRecipes.map(recipe=> (
                <RecipeDetailCard recipe={recipe} />
            ))}
        </div>
    );
};

export default Home;