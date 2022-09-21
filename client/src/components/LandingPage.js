import React from 'react';
import BreweryCard from './BreweryCard';
// import PostShow from './PostShow';
import { BreweryConsumer } from './context/BreweryContext';
// import { PostsConsumer } from './context/PostsContext';

//styling



function LandingPage() {
    // console.log(breweries)
    // const [breweryQuery, setBreweryQuery] = useState('');

    // const breweryQueryArray = !breweryQuery ? breweries : [...breweries].filter(brewery=>
    //     brewery.full_name.toLowerCase().includes(breweryQuery.toLocaleLowerCase()))

    // const searchObj = {
    //     breweryQuery: breweryQuery
    // }

    // function onClick() {
    // // console.log(searchObj)
    // fetch('/search_breweries',{
    //     method:'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body:JSON.stringify(searchObj)
    //   })
    //   .then(res => res.json())
    //   .then(res => {console.log(res)})
    // }



    return (
        <>
            <img src='https://images.pexels.com/photos/7893801/pexels-photo-7893801.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='friends with beer'/>
        </>
        // <>
        //     <BreweryConsumer>
        //     {BreweryContext => 
        //         <>
        //             {BreweryContext.map(brewery=> (
        //                 <BreweryCard brewery={brewery}/> )
        //             )}
        //         </>
        //     }

        //     </BreweryConsumer>
        //     <hr/>
        //     <PostsConsumer>
        //         {PostsContext => 
        //             PostsContext.map(post=> (
        //                 <PostShow post={post}/>
        //             ))
        //         }
        //     </PostsConsumer>
        // </>
    );
};

export default LandingPage;

            // {/* {breweries.map(brewery=> (
            //     <BreweryDetail brewery={brewery}/>
            // ))} */}


            // {/* <label>
            //     Search Breweries
            //     <input
            //         type="text"
            //         placeholder="Search for breweries..." 
            //         value={breweryQuery} 
            //         onChange={(e)=> setBreweryQuery(e.target.value)}
            //     />
            //     <button onClick={()=>onClick(searchObj)}>Submit</button>
            // </label> */}

          

            // {/* <div>
            //     {breweryQueryArray.map(brewery=> (
            //         <div>
            //             {brewery.name}
            //         </div>
            //     ))}
            // </div> */}