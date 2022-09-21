import React from 'react';
import { BreweryConsumer } from './context/BreweryContext';
import BreweryCard from './BreweryCard'
function Breweries() {
    return (
        <>
            <BreweryConsumer>
             {BreweryContext => 
                 <>
                     {BreweryContext.map(brewery=> (
                         <BreweryCard brewery={brewery}/> )
                     )}
                 </>
                }
            </BreweryConsumer>
        </>
    )
}

export default Breweries;