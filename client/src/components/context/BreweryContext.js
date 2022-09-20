import React, { useState, useEffect } from "react";

const BreweryContext = React.createContext()

const BreweryProvider = (props) => {
    const [breweries, setBreweries] = useState([])


    useEffect(() => {
        fetch('/breweries')
        .then(response => {
          if (response.ok) {
            response.json()
            .then(data=> {
              console.log("BreweryContext fetch breweries: ", data)
              setBreweries(data)
            });
          }
        })
        .catch(err => console.error(err));
    }, [])

    return (
        <BreweryContext.Provider value = {
           [...breweries]
        }>
            {props.children}
        </BreweryContext.Provider>
    )
}

const BreweryConsumer = BreweryContext.Consumer

export { BreweryProvider, BreweryConsumer };