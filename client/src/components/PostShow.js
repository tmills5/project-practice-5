import React from 'react';
import { Card } from 'antd';

function PostShow( {post} ) {
    console.log(post)
    console.log(post.comments)
    const {post_title, post_content} = post
    // const {user_id, comment_body} = post["comments"]

    return(
        <>
            <Card extra={<a href="/">More</a>} style={{ width: 300 }}>
                <h2>{post_title}</h2>
                <h3>{post.user.username}</h3>
                <p>{post_content}</p>
                <br/>
                {post["comments"].map(comment=> (
                    //console.log(comment)
                    <p>{comment.comment_body}-</p>
                ))}
            </Card>  
        </>
    )
};

export default PostShow;