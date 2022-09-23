import React from 'react';
import { BreweryConsumer } from './context/BreweryContext';
import BreweryCard from './BreweryCard';

function Breweries( {user} ) {
    return (
        <>
            {user ? 
            <BreweryConsumer>
             {BreweryContext => 
                 <>
                     {BreweryContext.map(brewery=> (
                         <BreweryCard brewery={brewery}/> )
                     )}
                 </>
                }
            </BreweryConsumer>
            :
            <div>Please Login or Sign up...</div>}
        </>
    )
}

export default Breweries;