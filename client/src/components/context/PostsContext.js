import React, { useState, useEffect } from 'react';

const PostsContext = React.createContext();

const PostsProvider = (props) => {
    const [ posts, setPosts ] = useState([])


    useEffect(() => {
        fetch('/posts')
        .then(response => {
          if (response.ok) {
            response.json()
            .then(data=> {
              console.log("PostsContext fetch posts: ", data)
              setPosts(data)
            });
          }
        })
        .catch(err => console.error(err));
    }, [])

    return (
        <PostsContext.Provider value = {
            [...posts]
        }>
            {props.children}
        </PostsContext.Provider>
    )
}

const PostsConsumer = PostsContext.Consumer

export { PostsProvider, PostsConsumer } 