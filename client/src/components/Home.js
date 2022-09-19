import React from 'react';
// import RecipeDetailCard from './RecipeDetailCard'


function Home({ randomRecipes, categories }) {
console.log(randomRecipes)
console.log(categories)
    return(
        // <div>
        //     {randomRecipes.map(recipe=> (
        //         <RecipeDetailCard recipe={recipe} key={recipe.idMeal} />
        //     ))}
        // </div>
        <>
        random recipes
            <ul>
            {randomRecipes.map(recipe=> (
                <li>
                    <a href=''>{recipe.strMeal}</a>
                </li>
            ))}
            </ul>

            <hr/>

        category list
            <ul>
            {categories.map(category=> (
                <li>
                    <a href=''>{category.strCategory}</a>
                    <p>{category.strCategoryDescription}</p>
                </li>
                ))}

            </ul>
        </>

    );
};

export default Home;