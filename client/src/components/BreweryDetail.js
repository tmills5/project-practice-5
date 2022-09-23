import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';

function BreweryDetail() {
    const [brewery, setBrewery] = useState({})
    const params = useParams();
    const { id, name, brewery_type, street, city, state, phone, website_url } = brewery 

    useEffect(()=>{
        fetch(`/breweries/${params.id}`)
            .then(res => res.json())
            .then(data => {
       console.log(data)
        setBrewery(data)
        })
    },[params.id])

    return (
        <div className='section'>
        <div className='container'>
        <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder"/>
      </figure>
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
          <p class="subtitle is-6">{street}
          <br/>
          {city}, {state}
          </p>
          <p>{phone}</p>        
          <p>Brewery Type: {brewery_type}</p>
        </div>
      </div>
  
      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris.
        <br/>
        <a href={website_url}>{website_url}</a>
      </div>
    </div>
    <article class="message">
    <div class="message-body">
      {/* Comments: {brewery.comments.map(comment => (
            <>
              <li key={comment.id}>{comment.comment_body}<button>Edit</button></li>
            </>
              ))} */}
    </div>
  </article>
  </div>
          {/* <Card title={name} extra={<a href="/">More</a>} style={{ width: 300 }}>
            <p>{brewery_type}</p>
            <p>{street}</p>
            <p>{city}</p>
            <p>{state}</p>
            <p>{phone}</p>
            <br/>
            <p>{website_url}</p>
            <p>Leave a Comment:</p>
              {}
            <hr/>
          </Card> */}
        </div>
      </div>
    )
} export default BreweryDetail;