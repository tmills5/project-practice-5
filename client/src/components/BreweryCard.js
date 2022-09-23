import React from 'react';
// import { BreweryConsumer } from './context/BreweryContext';

function BreweryCard( {brewery} ) {
  // console.log(brewery)
  // console.log(brewery.comments)
  const { id, name, brewery_type, website_url } = brewery;



  return(
    <div className='section'>
      <div className='container'>
      <div class="card">
  <div class="card-image">

  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder"/>
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{name}</p>
        
        <p>Brewery Type: {brewery_type}</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a href={`/breweries/${id}`}>More...</a>.
      <br/>
      <a href={website_url}>{website_url}</a>
    </div>
  </div>
  {/* <article class="message">
  <div class="message-body">
    Comments: {brewery.comments.map(comment=> (
          <>
            <li key={comment.id}>{comment.comment_body}<button>Edit</button></li>
          </>
            ))}
  </div>
</article> */}
</div>
      </div>
    </div>
  )
};

export default BreweryCard;