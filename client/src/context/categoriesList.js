import React, {useEffect, useState} from 'react';

const CategoriesContext = React.createContext();

function CategoriesProvider({children}){
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("/categories") // default GET fetch request to database
        .then((r) => r.json())
        .then((data) => setCategories(data)); // sets categories
        console.log("categoriesList.js: data: ", categories);
    }, [categories]);

  return(
    <CategoriesContext.Provider value={{categories, setCategories}}>
        {children}
    </CategoriesContext.Provider>
  );
}

export {CategoriesContext, CategoriesProvider};